import Link from 'next/link'
import { Calendar, Clock, Search, ArrowLeft } from 'lucide-react'

// Sample search results
const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React.js in 2024',
    excerpt: 'Learn the fundamentals of React.js and build your first component-based application with modern best practices.',
    slug: 'getting-started-react-js-2024',
    readTime: 8,
    createdAt: new Date('2024-01-15'),
    author: { name: 'John Doe' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }],
  },
  {
    id: '2',
    title: 'React Native Navigation: A Complete Guide',
    excerpt: 'Master React Navigation v6 and create seamless navigation experiences in your React Native applications.',
    slug: 'react-native-navigation-complete-guide',
    readTime: 12,
    createdAt: new Date('2024-01-10'),
    author: { name: 'Jane Smith' },
    categories: [{ name: 'React Native', slug: 'react-native', color: '#FF6B35' }],
  },
]

function SearchResultCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className="px-2 py-1 text-xs rounded-full text-white hover:opacity-80 transition-opacity"
            style={{ backgroundColor: category.color }}
          >
            {category.name}
          </Link>
        ))}
      </div>
      
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
          {post.title}
        </Link>
      </h2>
      
      <p className="text-gray-600 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span>By {post.author.name}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.createdAt.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams
  const query = params.q || ''
  const currentPage = Number(params.page) || 1
  const resultsPerPage = 10
  
  // In a real app, you'd perform the actual search here
  // For now, we'll show sample results when there's a query
  const searchResults = query ? samplePosts : []
  const totalResults = searchResults.length
  const totalPages = Math.ceil(totalResults / resultsPerPage)
  
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentResults = searchResults.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Search Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find tutorials, guides, and insights about React.js and web development
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <form method="GET" className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Search for tutorials, React hooks, components..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Search Articles
                </button>
                {query && (
                  <Link
                    href="/blog/search"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                  >
                    Clear Search
                  </Link>
                )}
              </div>
            </form>
          </div>

          {/* Search Results */}
          {query ? (
            <div>
              {/* Results Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Search Results
                </h2>
                <p className="text-gray-600">
                  {totalResults > 0 
                    ? `Found ${totalResults} article${totalResults !== 1 ? 's' : ''} matching "${query}"`
                    : `No articles found matching "${query}"`
                  }
                </p>
              </div>

              {/* Results */}
              {currentResults.length > 0 ? (
                <div className="space-y-6">
                  {currentResults.map((post) => (
                    <SearchResultCard key={post.id} post={post} />
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    No results found
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    We couldn't find any articles matching your search. Try using different keywords or browse our categories.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-medium">Suggestions:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Link href="/blog/search?q=react" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">
                        react
                      </Link>
                      <Link href="/blog/search?q=hooks" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">
                        hooks
                      </Link>
                      <Link href="/blog/search?q=javascript" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">
                        javascript
                      </Link>
                      <Link href="/blog/search?q=tutorial" className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors">
                        tutorial
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    {currentPage > 1 && (
                      <Link
                        href={`/blog/search?q=${encodeURIComponent(query)}&page=${currentPage - 1}`}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Previous
                      </Link>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Link
                        key={page}
                        href={`/blog/search?q=${encodeURIComponent(query)}&page=${page}`}
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
                        href={`/blog/search?q=${encodeURIComponent(query)}&page=${currentPage + 1}`}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Next
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Search className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Search Our Articles
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Enter keywords above to find tutorials, guides, and insights about React.js, web development, and more.
              </p>
              
              {/* Popular Searches */}
              <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Popular Searches</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Link href="/blog/search?q=react hooks" className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                    React Hooks
                  </Link>
                  <Link href="/blog/search?q=state management" className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                    State Management
                  </Link>
                  <Link href="/blog/search?q=components" className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                    Components
                  </Link>
                  <Link href="/blog/search?q=performance" className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                    Performance
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
