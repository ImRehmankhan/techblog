import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

// Create Prisma client with better error handling for build time
function createPrismaClient() {
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL not found, Prisma client will be limited')
    return null
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma
}

// Helper functions for blog operations
export async function getPublishedPosts(take, skip) {
  if (!prisma) {
    console.warn('Prisma client not available')
    return []
  }
  
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
  if (!prisma) {
    console.warn('Prisma client not available')
    return null
  }
  
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
  if (!prisma) {
    console.warn('Prisma client not available')
    return []
  }
  
  return await prisma.category.findMany({
    orderBy: { name: 'asc' }
  })
}

export async function getPostsByCategory(categorySlug, take, skip) {
  if (!prisma) {
    console.warn('Prisma client not available')
    return []
  }
  
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
  if (!prisma) {
    console.warn('Prisma client not available')
    return []
  }
  
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
