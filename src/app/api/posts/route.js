import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')
    const search = searchParams.get('search')
    const published = searchParams.get('published')
    
    const skip = (page - 1) * limit

    const where = {}
    
    if (published !== null) {
      where.published = published === 'true'
    }
    
    if (category) {
      where.categories = {
        some: {
          slug: category
        }
      }
    }
    
    if (tag) {
      where.tags = {
        some: {
          slug: tag
        }
      }
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } }
      ]
    }

    const [posts, totalCount] = await Promise.all([
      prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          excerpt: true,
          slug: true,
          published: true,
          featured: true,
          views: true,
          createdAt: true,
          updatedAt: true,
          author: {
            select: { id: true, name: true, email: true }
          },
          categories: {
            select: { id: true, name: true, slug: true }
          },
          tags: {
            select: { id: true, name: true, slug: true }
          },
          _count: {
            select: { comments: true }
          }
        }
      }),
      prisma.post.count({ where })
    ])

    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
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
    const { title, content, excerpt, published, featured, image, categories, tags } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Generate slug from title
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    // Check if slug already exists
    const existingPost = await prisma.post.findUnique({
      where: { slug }
    })

    if (existingPost) {
      return NextResponse.json(
        { error: 'A post with this title already exists' },
        { status: 400 }
      )
    }

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt: excerpt || content.substring(0, 200) + '...',
        slug,
        published: published || false,
        featured: featured || false,
        image,
        readTime,
        authorId: user.id,
        categories: {
          connect: categories?.map(cat => ({ id: cat.id })) || []
        },
        tags: {
          connect: tags?.map(tag => ({ id: tag.id })) || []
        }
      },
      include: {
        author: true,
        categories: true,
        tags: true
      }
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export async function PUT(request) {
  try {
    const user = await verifyAuth(request)
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id, title, content, excerpt, published, featured, image, categories, tags } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }
    
    // Update post
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        excerpt,
        published,
        featured,
        image,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        categories: {
          set: categories?.map(cat => ({ id: cat.id })) || []
        },
        tags: {
          set: tags?.map(tag => ({ id: tag.id })) || []
        }
      },
      include: {
        author: true,
        categories: true,
        tags: true
      }
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

export async function DELETE(request) {
  try {
    const user = await verifyAuth(request)
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }

    await prisma.post.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
