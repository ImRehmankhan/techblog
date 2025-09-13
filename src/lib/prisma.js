import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Helper functions for blog operations
export async function getPublishedPosts(take, skip) {
  return await prisma.post.findMany({
    where: { published: true },
    include: {
      author: { select: { name: true, image: true } },
      categories: true,
      tags: true,
      _count: { select: { comments: true } }
    },
    orderBy: { createdAt: 'desc' },
    take,
    skip
  })
}

export async function getPostBySlug(slug) {
  return await prisma.post.findUnique({
    where: { slug, published: true },
    include: {
      author: { select: { name: true, image: true } },
      categories: true,
      tags: true,
      comments: {
        where: { published: true },
        include: { author: { select: { name: true, image: true } } },
        orderBy: { createdAt: 'desc' }
      }
    }
  })
}

export async function getCategories() {
  return await prisma.category.findMany({
    orderBy: { name: 'asc' }
  })
}

export async function getPostsByCategory(categorySlug, take, skip) {
  return await prisma.post.findMany({
    where: {
      published: true,
      categories: {
        some: { slug: categorySlug }
      }
    },
    include: {
      author: { select: { name: true, image: true } },
      categories: true,
      tags: true,
      _count: { select: { comments: true } }
    },
    orderBy: { createdAt: 'desc' },
    take,
    skip
  })
}

export async function searchPosts(query, take, skip) {
  return await prisma.post.findMany({
    where: {
      published: true,
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
        { excerpt: { contains: query, mode: 'insensitive' } }
      ]
    },
    include: {
      author: { select: { name: true, image: true } },
      categories: true,
      tags: true
    },
    orderBy: { createdAt: 'desc' },
    take,
    skip
  })
}
