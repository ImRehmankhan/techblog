import Link from 'next/link'
// import { getPublishedPosts, getCategories } from '@/lib/prisma'

// Sample data for development
const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React.js in 2024',
    excerpt: 'Learn the fundamentals of React.js and build your first component-based application with modern best practices.',
    slug: 'getting-started-react-js-2024',
    image: '/api/placeholder/600/300',
    readTime: 8,
    createdAt: new Date('2024-01-15'),
    author: { name: 'John Doe', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }],
    tags: [{ name: 'beginner' }, { name: 'tutorial' }],
    featured: true,
    _count: { comments: 5 }
  },
  {
    id: '2',
    title: 'React Native Navigation: A Complete Guide',
    excerpt: 'Master React Navigation v6 and create seamless navigation experiences in your React Native applications.',
    slug: 'react-native-navigation-complete-guide',
    image: '/api/placeholder/600/300',
    readTime: 12,
    createdAt: new Date('2024-01-10'),
    author: { name: 'Jane Smith', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React Native', slug: 'react-native', color: '#FF6B35' }],
    tags: [{ name: 'navigation' }, { name: 'mobile' }],
    featured: true,
    _count: { comments: 8 }
  },
  {
    id: '3',
    title: 'State Management in React: Redux vs Context API',
    excerpt: 'Compare different state management solutions and learn when to use Redux vs Context API in your React applications.',
    slug: 'state-management-react-redux-context-api',
    image: '/api/placeholder/600/300',
    readTime: 10,
    createdAt: new Date('2024-01-05'),
    author: { name: 'Mike Johnson', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }],
    tags: [{ name: 'state-management' }, { name: 'redux' }],
    featured: false,
    _count: { comments: 3 }
  }
]

const sampleCategories = [
  { name: 'React.js', slug: 'reactjs', color: '#61DAFB', count: 15 },
  { name: 'React Native', slug: 'react-native', color: '#FF6B35', count: 8 },
  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', count: 12 },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6', count: 6 }
]

function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">{post.title.slice(0, 20)}...</span>
        </div>
        {post.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {post.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/categories/${category.slug}`}
              className="px-3 py-1 rounded-full text-sm font-medium text-white hover:opacity-80 transition-opacity"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </Link>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⏱</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>💬</span>
              <span>{post._count.comments}</span>
            </div>
            <span>{post.createdAt.toLocaleDateString()}</span>
          </div>
        </div>
        
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Read More
          <span>→</span>
        </Link>
      </div>
    </article>
  )
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const postsPerPage = 6
  
  // In a real app, you'd fetch based on searchParams
  const posts = samplePosts
  const categories = sampleCategories
  
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = posts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & Tutorials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest in React.js and React Native development. 
              From beginner tutorials to advanced techniques, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Posts */}
            {currentPage === 1 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-2">⭐</span>
                  Featured Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {posts.filter(post => post.featured).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentPage === 1 ? 'Latest Articles' : `Articles - Page ${currentPage}`}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>📚</span>
                  <span>{totalPosts} articles</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    {currentPage > 1 && (
                      <Link
                        href={`/blog?page=${currentPage - 1}`}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Previous
                      </Link>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Link
                        key={page}
                        href={`/blog?page=${page}`}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          page === currentPage
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </Link>
                    ))}
                    
                    {currentPage < totalPages && (
                      <Link
                        href={`/blog?page=${currentPage + 1}`}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Next
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🔍</span>
                Search Articles
              </h3>
              <form action="/blog/search" method="GET">
                <div className="relative">
                  <input
                    type="text"
                    name="q"
                    placeholder="Search tutorials..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-3 text-gray-400 hover:text-blue-600"
                  >
                    🔍
                  </button>
                </div>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📂</span>
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog/categories/${category.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span className="font-medium text-gray-700 group-hover:text-blue-600">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="mr-2">📬</span>
                Stay Updated
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest React tutorials delivered to your inbox!
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
