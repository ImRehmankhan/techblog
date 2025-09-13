import Link from 'next/link'

// Sample data for the blog
const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React.js in 2024',
    excerpt: 'Learn the fundamentals of React.js and build your first component-based application with modern best practices.',
    slug: 'getting-started-react-js-2024',
    image: 'https://via.placeholder.com/600x300/61DAFB/FFFFFF?text=React.js+Tutorial',
    readTime: 8,
    createdAt: new Date('2024-01-15'),
    author: { name: 'John Doe', image: 'https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=JD' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }],
    tags: [{ name: 'beginner' }, { name: 'tutorial' }],
    featured: true
  },
  {
    id: '2',
    title: 'React Native Navigation: A Complete Guide',
    excerpt: 'Master React Navigation v6 and create seamless navigation experiences in your React Native applications.',
    slug: 'react-native-navigation-complete-guide',
    image: 'https://via.placeholder.com/600x300/FF6B35/FFFFFF?text=React+Native+Guide',
    readTime: 12,
    createdAt: new Date('2024-01-10'),
    author: { name: 'Jane Smith', image: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=JS' },
    categories: [{ name: 'React Native', slug: 'react-native', color: '#FF6B35' }],
    tags: [{ name: 'navigation' }, { name: 'mobile' }],
    featured: true
  },
  {
    id: '3',
    title: 'State Management in React: Redux vs Context API',
    excerpt: 'Compare different state management solutions and learn when to use Redux vs Context API in your React applications.',
    slug: 'state-management-react-redux-context-api',
    image: 'https://via.placeholder.com/600x300/8B5CF6/FFFFFF?text=State+Management',
    readTime: 10,
    createdAt: new Date('2024-01-05'),
    author: { name: 'Mike Johnson', image: 'https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=MJ' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }],
    tags: [{ name: 'state-management' }, { name: 'redux' }],
    featured: false
  }
]

const categories = [
  { name: 'React.js', slug: 'reactjs', color: '#61DAFB', count: 15 },
  { name: 'React Native', slug: 'react-native', color: '#FF6B35', count: 8 },
  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', count: 12 },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6', count: 6 }
]

export default function Home() {
  const featuredPosts = samplePosts.filter(post => post.featured)
  const recentPosts = samplePosts.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master <span className="text-blue-600">React.js</span> &{' '}
              <span className="text-orange-500">React Native</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your ultimate destination for React.js and React Native tutorials, best practices, 
              and cutting-edge development techniques. Join thousands of developers building amazing apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Explore Articles
              </Link>
              <Link
                href="/blog/category/reactjs"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                React.js Tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked tutorials and guides to help you level up your React development skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{post.title.slice(0, 20)}...</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.categories.map((category) => (
                      <span
                        key={category.slug}
                        className="px-3 py-1 rounded-full text-sm font-medium text-white"
                        style={{ backgroundColor: category.color }}
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span>👤</span>
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>⏱</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📅</span>
                      <span>{post.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium mt-4 hover:text-blue-800 transition-colors duration-200"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find articles organized by technology and topic
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <span className="text-white font-bold text-xl">
                    {category.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count} articles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-gray-600">
                Stay up to date with the latest in React development
              </p>
            </div>
            <Link
              href="/blog"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
            >
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">{post.title.slice(0, 25)}...</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.categories.map((category) => (
                      <span
                        key={category.slug}
                        className="px-2 py-1 rounded text-xs font-medium text-white"
                        style={{ backgroundColor: category.color }}
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author.name}</span>
                    <span>{post.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Enhanced Heading */}
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                📧 Newsletter
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Join Our Developer
                </span>
                <br />
                <span className="text-white">Community</span>
              </h2>
            </div>
            
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
              Get the latest React.js and React Native tutorials, tips, and industry insights delivered straight to your inbox. 
              Join <span className="text-yellow-300 font-semibold">10,000+</span> passionate developers building amazing apps!
            </p>
            
            {/* Enhanced Form */}
            <div className="max-w-lg mx-auto mb-12">
              <form className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300 text-lg shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 pointer-events-none"></div>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Subscribe Now
                </button>
              </form>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 text-blue-100 text-sm">
                <div className="flex items-center gap-1">
                  <span>✨</span>
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🚀</span>
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🛡️</span>
                  <span>No spam</span>
                </div>
              </div>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-white font-bold text-lg mb-2">Exclusive Content</h3>
                <p className="text-blue-100 text-sm">Access to premium tutorials and early previews</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-white font-bold text-lg mb-2">Expert Tips</h3>
                <p className="text-blue-100 text-sm">Pro tips and best practices from industry experts</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-white font-bold text-lg mb-2">Community Access</h3>
                <p className="text-blue-100 text-sm">Connect with fellow developers and share knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
