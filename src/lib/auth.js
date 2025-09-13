import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { prisma } from './prisma'

// Runtime safe secret getter
function getJwtSecret() {
  return new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key-here'
  )
}

// Verify admin credentials
export async function verifyCredentials(email, password) {
  if (!prisma) {
    console.warn('Prisma client not available, using fallback admin auth')
    if (
      email === (process.env.ADMIN_EMAIL || 'admin@example.com') &&
      password === (process.env.ADMIN_PASSWORD || 'demo123')
    ) {
      return { id: 'admin-fallback', email, name: 'Admin User', role: 'ADMIN' }
    }
    return null
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user || user.role !== 'ADMIN') return null

  if (password === (process.env.ADMIN_PASSWORD || 'demo123')) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  }
  return null
}

// Create JWT
export async function createToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(getJwtSecret()) // runtime safe
}

// Verify JWT
export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret())
    return payload
  } catch {
    return null
  }
}
