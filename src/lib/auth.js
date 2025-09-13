import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { prisma } from './prisma'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-here'
)

// Verify admin credentials against database
export async function verifyCredentials(email, password) {
  try {
    // Handle case when DATABASE_URL is not available during build
    if (!prisma) {
      console.warn('Prisma client not available, using fallback admin auth')
      // Fallback authentication when database is not available
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com'
      const adminPassword = process.env.ADMIN_PASSWORD || 'demo123'
      
      if (email === adminEmail && password === adminPassword) {
        return {
          id: 'admin-fallback',
          email: adminEmail,
          name: 'Admin User',
          role: 'ADMIN'
        }
      }
      return null
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })
    
    if (!user || user.role !== 'ADMIN') {
      return null
    }
    
    // In a real app, you'd hash passwords
    // For demo purposes, we'll check against a simple password
    const adminPassword = process.env.ADMIN_PASSWORD || 'demo123'
    
    if (password === adminPassword) {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    }
    
    return null
  } catch (error) {
    console.error('Error verifying credentials:', error)
    return null
  }
}

// Create JWT token
export async function createToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET)
}

// Verify JWT token
export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload
  } catch (error) {
    return null
  }
}

// Get current session
export async function getSession() {
  const cookieStore = cookies()
  const token = cookieStore.get('auth-token')
  
  if (!token) {
    return null
  }
  
  const payload = await verifyToken(token.value)
  return payload
}

// Set auth cookie
export function setAuthCookie(token) {
  const cookieStore = cookies()
  cookieStore.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 // 24 hours
  })
}

// Clear auth cookie
export function clearAuthCookie() {
  const cookieStore = cookies()
  cookieStore.delete('auth-token')
}

// Verify auth from request (for API routes)
export async function verifyAuth(request) {
  try {
    const cookieHeader = request.headers.get('cookie')
    if (!cookieHeader) return null
    
    const cookies = Object.fromEntries(
      cookieHeader.split('; ').map(c => c.split('='))
    )
    
    const token = cookies['auth-token']
    if (!token) return null
    
    return await verifyToken(token)
  } catch (error) {
    return null
  }
}
