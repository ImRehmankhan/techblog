import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-here'
)

// Verify JWT token in middleware context
async function verifyTokenMiddleware(token) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload
  } catch (error) {
    return null
  }
}

// Get session from request cookies
async function getSessionFromRequest(request) {
  const token = request.cookies.get('auth-token')
  
  if (!token) {
    return null
  }
  
  return await verifyTokenMiddleware(token.value)
}

export async function middleware(request) {
  // Only protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }
    
    try {
      const session = await getSessionFromRequest(request)
      
      if (!session || session.role !== 'ADMIN') {
        // Redirect to login page
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
    } catch (error) {
      console.error('Middleware auth error:', error)
      // If there's an error checking session, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
