import Link from 'next/link'

// Sample React Native posts
const reactNativePosts = [
  {
    id: '2',
    title: 'React Native Navigation: A Complete Guide',
    excerpt: 'Master React Navigation v6 and create seamless navigation experiences in your React Native applications.',
    slug: 'react-native-navigation-complete-guide',
    readTime: 12,
    createdAt: new Date('2024-01-10'),
    author: { name: 'Jane Smith' },
    featured: true,
    difficulty: 'Intermediate'
  },
  {
    id: '4',
    title: 'Building Cross-Platform Apps with React Native',
    excerpt: 'Learn how to create mobile applications that work seamlessly on both iOS and Android using React Native.',
    slug: 'building-cross-platform-apps-react-native',
    readTime: 15,
    createdAt: new Date('2024-01-12'),
    author: { name: 'Sarah Wilson' },
    featured: false,
    difficulty: 'Beginner'
  },
  {
    id: '6',
    title: 'React Native Performance Optimization',
    excerpt: 'Discover techniques to optimize your React Native app performance and deliver smooth user experiences.',
    slug: 'react-native-performance-optimization',
    readTime: 14,
    createdAt: new Date('2024-01-06'),
    author: { name: 'David Kumar' },
    featured: false,
    difficulty: 'Advanced'
  },
  {
    id: '10',
    title: 'React Native State Management with Redux Toolkit',
    excerpt: 'Learn modern state management in React Native using Redux Toolkit for scalable mobile applications.',
    slug: 'react-native-state-management-redux-toolkit',
    readTime: 13,
    createdAt: new Date('2024-01-25'),
    author: { name: 'Michael Brown' },
    featured: true,
    difficulty: 'Intermediate'
  },
  {
    id: '11',
    title: 'React Native Animation and Gestures',
    excerpt: 'Create beautiful animations and gesture-based interactions in React Native using Reanimated and Gesture Handler.',
    slug: 'react-native-animation-gestures',
    readTime: 16,
    createdAt: new Date('2024-01-28'),
    author: { name: 'Anna Lee' },
    featured: true,
    difficulty: 'Advanced'
  },
  {
    id: '12',
    title: 'Getting Started with React Native',
    excerpt: 'Complete beginner guide to React Native development. Set up your environment and build your first mobile app.',
    slug: 'getting-started-react-native',
    readTime: 10,
    createdAt: new Date('2024-01-30'),
    author: { name: 'Tom Wilson' },
    featured: false,
    difficulty: 'Beginner'
  }
]

export const metadata = {
  title: 'React Native Tutorials - TechBlog',
  description: 'Build cross-platform mobile applications with React Native. Learn navigation, native modules, performance optimization, and mobile-specific patterns.',
  openGraph: {
    title: 'React Native Tutorials - TechBlog',
    description: 'Build cross-platform mobile applications with React Native. Learn navigation, native modules, and mobile-specific patterns.',
  },
}

export default function ReactNativePage() {
  const featuredPosts = reactNativePosts.filter(post => post.featured)
  const allPosts = reactNativePosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  const beginnerPosts = reactNativePosts.filter(post => post.difficulty === 'Beginner')
  const intermediatePosts = reactNativePosts.filter(post => post.difficulty === 'Intermediate')
  const advancedPosts = reactNativePosts.filter(post => post.difficulty === 'Advanced')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-orange-200 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-orange-300">/</li>
                <li>
                  <Link href="/blog" className="text-orange-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-orange-300">/</li>
                <li className="text-white font-medium">React Native</li>
              </ol>
            </nav>

            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                React Native <span className="text-orange-200">Development</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Build cross-platform mobile applications with React Native. Master navigation, native modules, 
                performance optimization, and mobile-specific patterns for iOS and Android.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-orange-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span>{reactNativePosts.length} Mobile-focused Tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span>Production Ready</span>
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
              Your React Native Learning Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our structured path from mobile development basics to advanced React Native mastery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-green-800">Getting Started</h3>
              </div>
              <p className="text-green-700 mb-4">Learn React Native fundamentals and build your first app</p>
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
            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-orange-800">Core Skills</h3>
              </div>
              <p className="text-orange-700 mb-4">Master navigation, state management, and mobile patterns</p>
              <div className="space-y-3">
                {intermediatePosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-300 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{post.title}</h4>
                    <p className="text-xs text-gray-600">{post.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advanced */}
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-red-800">Advanced</h3>
              </div>
              <p className="text-red-700 mb-4">Performance optimization, animations, and native modules</p>
              <div className="space-y-3">
                {advancedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block p-3 bg-white rounded-lg border border-red-200 hover:border-red-300 transition-colors"
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
              Featured React Native Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential tutorials to build production-ready React Native applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">📱 {post.title.slice(0, 20)}...</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      React Native
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      post.difficulty === 'Intermediate' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
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
                    className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-800 transition-colors duration-200"
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

      {/* Mobile Development Resources */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential React Native Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools and resources every React Native developer should know
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Navigation</h3>
              <p className="text-gray-600 text-sm">React Navigation, Native Stack, Tab Navigation</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">UI Components</h3>
              <p className="text-gray-600 text-sm">Native Base, UI Kitten, React Native Elements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Development Tools</h3>
              <p className="text-gray-600 text-sm">Expo, React Native CLI, Flipper</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">Reanimated, Gesture Handler, Performance Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All React Native Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete collection of React Native tutorials and guides
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
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        React Native
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        post.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        post.difficulty === 'Intermediate' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
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
                      className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200"
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
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Master React Native Development
            </h2>
            <p className="text-orange-100 mb-8">
              Get the latest React Native tutorials, mobile development tips, and cross-platform insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
              />
              <button
                type="submit"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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
