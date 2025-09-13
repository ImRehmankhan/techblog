import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import AdSense from '../../../components/AdSense'
import BlogContent from '../../../components/BlogContent'

async function getPostBySlug(slug) {
  try {
    const post = await prisma.post.findFirst({
      where: { slug: slug, published: true },
      include: {
        author: { select: { id: true, name: true, email: true, image: true } },
        categories: true,
        tags: true
      }
    })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

async function getRelatedPosts(postId, categories, limit = 2) {
  try {
    const categoryIds = categories?.map(cat => cat.id) || []
    if (categoryIds.length === 0) return []
    
    const relatedPosts = await prisma.post.findMany({
      where: {
        id: { not: postId },
        categories: { some: { id: { in: categoryIds } } },
        published: true
      },
      include: { categories: true, author: { select: { name: true } } },
      take: limit,
      orderBy: { createdAt: 'desc' }
    })
    return relatedPosts
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt || post.content.substring(0, 160) + '...'
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) notFound()

  const relatedPosts = await getRelatedPosts(post.id, post.categories)
  const readingTime = Math.ceil((post.content?.split(' ').length || 0) / 200)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            {post.categories?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className="px-3 py-1 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700"
                    style={category.color ? { backgroundColor: category.color } : {}}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {post.author.image ? (
                  <img 
                    src={post.author.image} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-semibold text-gray-600">
                    {post.author.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.createdAt).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  {readingTime} min read
                </div>
              </div>
            </div>

            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag.id} className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <BlogContent content={post.content} />
            <div className="my-8">
              <AdSense adSlot="1234567890" adFormat="auto" style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="group">
                    <Link href={`/blog/post/${relatedPost.slug}`}>
                      <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-4 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                          <p className="text-blue-100">Click to read more</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {relatedPost.excerpt || (relatedPost.content?.substring(0, 150) + '...')}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}