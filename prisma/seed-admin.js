import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@blog.com' },
    update: {},
    create: {
      email: 'admin@blog.com',
      name: 'Admin User',
      role: 'ADMIN'
    }
  })

  console.log('Created admin user:', adminUser)

  // Create some sample categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'react' },
      update: {},
      create: {
        name: 'React',
        slug: 'react',
        description: 'React.js tutorials and tips',
        color: '#61dafb'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'javascript' },
      update: {},
      create: {
        name: 'JavaScript',
        slug: 'javascript',
        description: 'JavaScript programming guides',
        color: '#f7df1e'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'nextjs' },
      update: {},
      create: {
        name: 'Next.js',
        slug: 'nextjs',
        description: 'Next.js framework tutorials',
        color: '#000000'
      }
    })
  ])

  console.log('Created categories:', categories.length)

  // Create some sample tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'beginner' },
      update: {},
      create: {
        name: 'Beginner',
        slug: 'beginner'
      }
    }),
    prisma.tag.upsert({
      where: { slug: 'tutorial' },
      update: {},
      create: {
        name: 'Tutorial',
        slug: 'tutorial'
      }
    }),
    prisma.tag.upsert({
      where: { slug: 'advanced' },
      update: {},
      create: {
        name: 'Advanced',
        slug: 'advanced'
      }
    }),
    prisma.tag.upsert({
      where: { slug: 'hooks' },
      update: {},
      create: {
        name: 'Hooks',
        slug: 'hooks'
      }
    })
  ])

  console.log('Created tags:', tags.length)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
