import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
// import { getPostsByCategory, getCategories } from '@/lib/prisma'
import { notFound } from 'next/navigation'

// Sample data
const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React.js in 2024',
    excerpt: 'Learn the fundamentals of React.js and build your first component-based application with modern best practices.',
    slug: 'getting-started-react-js-2024',
    image: '/api/placeholder/400/200',
    readTime: 8,
    createdAt: new Date('2024-01-15'),
    author: { name: 'John Doe', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }]
  },
  {
    id: '3',
    title: 'Building Custom Hooks in React',
    excerpt: 'Learn how to create reusable custom hooks to simplify your React components and share logic across your application.',
    slug: 'building-custom-hooks-react',
    image: '/api/placeholder/400/200',
    readTime: 10,
    createdAt: new Date('2024-01-05'),
    author: { name: 'Mike Johnson', image: '/api/placeholder/40/40' },
    categories: [{ name: 'React.js', slug: 'reactjs', color: '#61DAFB' }]
  }
]

const categoryData = {
  'reactjs': {
    name: 'React.js',
    description: 'Learn React.js from basics to advanced concepts. Discover hooks, state management, performance optimization, and modern React patterns.',
    color: '#61DAFB',
    posts: samplePosts
  },
  'react-native': {
    name: 'React Native',
    description: 'Master mobile app development with React Native. Learn navigation, animations, native modules, and platform-specific development.',
    color: '#FF6B35',
    posts: []
  },
  'javascript': {
    name: 'JavaScript',
    description: 'Master modern JavaScript concepts, ES6+ features, asynchronous programming, and best practices for web development.',
    color: '#F7DF1E',
    posts: []
  },
  'typescript': {
    name: 'TypeScript',
    description: 'Learn TypeScript fundamentals, advanced types, and how to build type-safe applications.',
    color: '#3178C6',
    posts: []
  }
}

function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-white text-lg font-semibold text-center px-4">
          {post.title.slice(0, 30)}...
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{post.createdAt.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">
              {post.author.name.charAt(0)}
            </span>
          </div>
          <span className="text-sm text-gray-600">{post.author.name}</span>
        </div>
      </div>
    </article>
  )
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const category = categoryData[slug]
  
  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: category.color }}
            >
              <span className="text-white font-bold text-xl">
                {category.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-gray-600 mt-2">{category.posts.length} articles</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Posts */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {category.posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div
              className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <span
                className="text-4xl font-bold"
                style={{ color: category.color }}
              >
                {category.name.charAt(0)}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No articles yet in {category.name}
            </h2>
            <p className="text-gray-600 mb-8">
              We're working on adding more {category.name} content. Check back soon!
            </p>
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Explore Other Articles
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
