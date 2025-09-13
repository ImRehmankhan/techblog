import { NextResponse } from 'next/server'
import { verifyCredentials, createToken } from '../../../../lib/auth.js'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }
    
    const user = await verifyCredentials(email, password)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
    
    // Create JWT token
    const token = await createToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    })
    
    // Create response with token in HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      user: user
    })
    
    // Set the auth cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    })
    
    return response
    
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
