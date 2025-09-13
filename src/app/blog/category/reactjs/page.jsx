import Link from 'next/link'

// Sample React.js posts
const reactPosts = [
  {
    id: '1',
    title: 'Getting Started with React.js in 2024',
    excerpt: 'Learn the fundamentals of React.js and build your first component-based application with modern best practices.',
    slug: 'getting-started-react-js-2024',
    readTime: 8,
    createdAt: new Date('2024-01-15'),
    author: { name: 'John Doe' },
    featured: true,
    difficulty: 'Beginner'
  },
  {
    id: '3',
    title: 'State Management in React: Redux vs Context API',
    excerpt: 'Compare different state management solutions and learn when to use Redux vs Context API in your React applications.',
    slug: 'state-management-react-redux-context-api',
    readTime: 10,
    createdAt: new Date('2024-01-05'),
    author: { name: 'Mike Johnson' },
    featured: false,
    difficulty: 'Intermediate'
  },
  {
    id: '5',
    title: 'React Hooks: useEffect Best Practices',
    excerpt: 'Master the useEffect hook with practical examples and learn how to avoid common pitfalls in React applications.',
    slug: 'react-hooks-useeffect-best-practices',
    readTime: 9,
    createdAt: new Date('2024-01-08'),
    author: { name: 'Alex Chen' },
    featured: false,
    difficulty: 'Intermediate'
  },
  {
    id: '7',
    title: 'React Component Design Patterns',
    excerpt: 'Explore advanced React component patterns including render props, higher-order components, and compound components.',
    slug: 'react-component-design-patterns',
    readTime: 13,
    createdAt: new Date('2024-01-20'),
    author: { name: 'Emily Davis' },
    featured: true,
    difficulty: 'Advanced'
  },
  {
    id: '8',
    title: 'Testing React Applications with Jest and React Testing Library',
    excerpt: 'Learn comprehensive testing strategies for React apps including unit tests, integration tests, and best practices.',
    slug: 'testing-react-applications-jest-rtl',
    readTime: 16,
    createdAt: new Date('2024-01-18'),
    author: { name: 'Robert Kim' },
    featured: false,
    difficulty: 'Intermediate'
  },
  {
    id: '9',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to optimize React app performance including memoization, code splitting, and lazy loading.',
    slug: 'react-performance-optimization-techniques',
    readTime: 12,
    createdAt: new Date('2024-01-22'),
    author: { name: 'Lisa Wong' },
    featured: true,
    difficulty: 'Advanced'
  }
]

export const metadata = {
  title: 'React.js Tutorials - TechBlog',
  description: 'Learn React.js from basics to advanced concepts. Master components, hooks, state management, and modern React patterns with our comprehensive tutorials.',
  openGraph: {
    title: 'React.js Tutorials - TechBlog',
    description: 'Learn React.js from basics to advanced concepts. Master components, hooks, state management, and modern React patterns.',
  },
}

export default function ReactJSPage() {
  const featuredPosts = reactPosts.filter(post => post.featured)
  const allPosts = reactPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  const beginnerPosts = reactPosts.filter(post => post.difficulty === 'Beginner')
  const intermediatePosts = reactPosts.filter(post => post.difficulty === 'Intermediate')
  const advancedPosts = reactPosts.filter(post => post.difficulty === 'Advanced')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-blue-300">/</li>
                <li>
                  <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-blue-300">/</li>
                <li className="text-white font-medium">React.js</li>
              </ol>
            </nav>

            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6">
                <span className="text-3xl">⚛️</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                React.js <span className="text-blue-200">Mastery</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Master React.js from fundamentals to advanced concepts. Learn components, hooks, state management, 
                and modern patterns that power today's web applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span>{reactPosts.length} In-depth Tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>Beginner to Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span>Modern React Patterns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your React.js Learning Path
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our structured learning path from basics to advanced React development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-green-800">Beginner</h3>
              </div>
              <p className="text-green-700 mb-4">Start with React fundamentals and core concepts</p>
              <div className="space-y-3">
                {beginnerPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block p-3 bg-white rounded-lg border border-green-200 hover:border-green-300 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{post.title}</h4>
                    <p className="text-xs text-gray-600">{post.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Intermediate */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800">Intermediate</h3>
              </div>
              <p className="text-blue-700 mb-4">Dive deeper into hooks, state management, and patterns</p>
              <div className="space-y-3">
                {intermediatePosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-300 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{post.title}</h4>
                    <p className="text-xs text-gray-600">{post.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advanced */}
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-purple-800">Advanced</h3>
              </div>
              <p className="text-purple-700 mb-4">Master advanced patterns and performance optimization</p>
              <div className="space-y-3">
                {advancedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-300 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{post.title}</h4>
                    <p className="text-xs text-gray-600">{post.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured React.js Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked tutorials to accelerate your React.js learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">⚛️ {post.title.slice(0, 20)}...</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      React.js
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      post.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {post.difficulty}
                    </span>
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
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
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

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All React.js Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete collection of React.js tutorials and guides
            </p>
          </div>
          
          <div className="space-y-6">
            {allPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        React.js
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        post.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        post.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {post.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>👤 {post.author.name}</span>
                      <span>⏱ {post.readTime} min read</span>
                      <span>📅 {post.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Read Article
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Master React.js with Us
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest React.js tutorials, tips, and best practices delivered to your inbox
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
