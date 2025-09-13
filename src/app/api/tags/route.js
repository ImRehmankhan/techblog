import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
      select: {
        id: true,
        name: true,
        slug: true
      }
    })

    return NextResponse.json(tags)
  } catch (error) {
    console.error('Error fetching tags:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tags' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const user = await verifyAuth(request)
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    const slug = name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const tag = await prisma.tag.create({
      data: {
        name,
        slug
      }
    })

    return NextResponse.json(tag, { status: 201 })
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Tag already exists' },
        { status: 400 }
      )
    }
    console.error('Error creating tag:', error)
    return NextResponse.json(
      { error: 'Failed to create tag' },
      { status: 500 }
    )
  }
}
