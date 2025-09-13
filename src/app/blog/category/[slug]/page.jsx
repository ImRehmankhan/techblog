import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample data for the blog
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
    featured: true
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
    featured: true
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
    featured: false
  },
  {
    id: '4',
    title: 'Building Cross-Platform Apps with React Native',
    excerpt: 'Learn how to create mobile applications that work seamlessly on both iOS and Android using React Native.',
    slug: 'building-cross-platform-apps-react-native',
    image: '/api/placeholder/600/300',
    readTime: 15,
    createdAt: new Date('2024-01-12'),
    author: { name: 'Sarah Wilson', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React Native', slug: 'react-native', color: '#FF6B35' }],
    tags: [{ name: 'mobile' }, { name: 'cross-platform' }],
    featured: false
  },
  {
    id: '5',
    title: 'React Hooks: useEffect Best Practices',
    excerpt: 'Master the useEffect hook with practical examples and learn how to avoid common pitfalls in React applications.',
    slug: 'react-hooks-useeffect-best-practices',
    image: '/api/placeholder/600/300',
    readTime: 9,
    createdAt: new Date('2024-01-08'),
    author: { name: 'Alex Chen', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }],
    tags: [{ name: 'hooks' }, { name: 'useEffect' }],
    featured: false
  },
  {
    id: '6',
    title: 'React Native Performance Optimization',
    excerpt: 'Discover techniques to optimize your React Native app performance and deliver smooth user experiences.',
    slug: 'react-native-performance-optimization',
    image: '/api/placeholder/600/300',
    readTime: 14,
    createdAt: new Date('2024-01-06'),
    author: { name: 'David Kumar', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React Native', slug: 'react-native', color: '#FF6B35' }],
    tags: [{ name: 'performance' }, { name: 'optimization' }],
    featured: false
  }
]

const categories = {
  'reactjs': {
    name: 'React.js',
    slug: 'reactjs',
    color: '#61DAFB',
    description: 'Learn React.js from basics to advanced concepts. Master components, hooks, state management, and modern React patterns.',
    icon: '⚛️'
  },
  'react-native': {
    name: 'React Native',
    slug: 'react-native',
    color: '#FF6B35',
    description: 'Build cross-platform mobile applications with React Native. Learn navigation, native modules, and mobile-specific patterns.',
    icon: '📱'
  },
  'javascript': {
    name: 'JavaScript',
    slug: 'javascript',
    color: '#F7DF1E',
    description: 'Master JavaScript fundamentals and modern ES6+ features. Learn asynchronous programming, closures, and advanced concepts.',
    icon: '🟨'
  },
  'typescript': {
    name: 'TypeScript',
    slug: 'typescript',
    color: '#3178C6',
    description: 'Add type safety to your JavaScript projects with TypeScript. Learn interfaces, generics, and advanced typing patterns.',
    icon: '🔷'
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const category = categories[slug]
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.name} Tutorials - TechBlog`,
    description: category.description,
    openGraph: {
      title: `${category.name} Tutorials - TechBlog`,
      description: category.description,
    },
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const category = categories[slug]
  
  if (!category) {
    notFound()
  }

  // Filter posts by category
  const categoryPosts = samplePosts.filter(
    post => post.categories.some(cat => cat.slug === slug)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-white font-medium">{category.name}</li>
              </ol>
            </nav>

            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: category.color }}>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {category.name} <span className="text-gray-400">Tutorials</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <span>{categoryPosts.length} Articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span>Expert Curated</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span>Regularly Updated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {categoryPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${category.color}40, ${category.color}80)` }}
                    >
                      <span className="text-white text-lg font-semibold">{post.title.slice(0, 25)}...</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.categories.map((cat) => (
                        <span
                          key={cat.slug}
                          className="px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ backgroundColor: cat.color }}
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                      className="inline-flex items-center gap-2 font-medium hover:underline transition-colors duration-200"
                      style={{ color: category.color }}
                    >
                      Read More
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Yet</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                We're working on creating amazing {category.name} content for you. Check back soon!
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Explore All Articles
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Other Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more tutorials and guides across different technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(categories)
              .filter(cat => cat.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: cat.color }}
                  >
                    <span className="text-white text-2xl">{cat.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {samplePosts.filter(post => post.categories.some(c => c.slug === cat.slug)).length} articles
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with {category.name}
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest {category.name} tutorials and tips delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
