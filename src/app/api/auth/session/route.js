import { NextResponse } from 'next/server'
import { verifyAuth } from '@/lib/auth'

export async function GET(request) {
  try {
    // Check for custom JWT authentication
    const user = await verifyAuth(request)
    
    if (user) {
      // Return session-like response for compatibility
      return NextResponse.json({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
      })
    } else {
      // No session
      return NextResponse.json({ user: null })
    }
  } catch (error) {
    console.error('Session check error:', error)
    return NextResponse.json({ user: null })
  }
}
