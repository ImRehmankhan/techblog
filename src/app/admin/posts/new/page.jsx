'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, Upload, X, Plus } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function NewPostPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  const [previewMode, setPreviewMode] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    published: false,
    featured: false,
    image: '',
    categories: [],
    tags: []
  })
  const router = useRouter()

  useEffect(() => {
    fetchCategories()
    fetchTags()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      if (response.ok) {
        const data = await response.json()
        setCategories(data)
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }

  const fetchTags = async () => {
    try {
      const response = await fetch('/api/tags')
      if (response.ok) {
        const data = await response.json()
        setTags(data)
      }
    } catch (error) {
      console.error('Failed to fetch tags:', error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required'
    }
    
    if (formData.content.trim().length < 100) {
      newErrors.content = 'Content should be at least 100 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    
    setIsUploading(true)
    const formDataUpload = new FormData()
    formDataUpload.append('file', file)
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload
      })
      
      if (response.ok) {
        const data = await response.json()
        setFormData(prev => ({ ...prev, image: data.url }))
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
    } finally {
      setIsUploading(false)
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: '' }))
  }

  const handleCategoryChange = (categoryId, checked) => {
    const category = categories.find(c => c.id === categoryId)
    if (checked) {
      setFormData(prev => ({
        ...prev,
        categories: [...prev.categories, category]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        categories: prev.categories.filter(c => c.id !== categoryId)
      }))
    }
  }

  const handleTagChange = (tagId, checked) => {
    const tag = tags.find(t => t.id === tagId)
    if (checked) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        tags: prev.tags.filter(t => t.id !== tagId)
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const post = await response.json()
        router.push('/admin')
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to create post')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Failed to create post')
    } finally {
      setIsLoading(false)
    }
  }

  const togglePreview = () => {
    setPreviewMode(!previewMode)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Create New Post</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={togglePreview}
              className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
                previewMode 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Eye className="h-4 w-4" />
              <span>{previewMode ? 'Edit' : 'Preview'}</span>
            </button>
            <button
              type="submit"
              form="post-form"
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>{isLoading ? 'Saving...' : 'Save Post'}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <form id="post-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.title ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter post title..."
                required
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Content */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Content *
                </label>
                <span className="text-sm text-gray-500">
                  {formData.content.length} characters
                </span>
              </div>
              
              {!previewMode ? (
                <>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={20}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm ${
                      errors.content ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Write your post content in Markdown..."
                    required
                  />
                  {errors.content && (
                    <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    You can use Markdown syntax for formatting. Code blocks, links, images, etc. are supported.
                  </p>
                </>
              ) : (
                <div className="border border-gray-300 rounded-lg p-4 min-h-[500px] bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Preview:</h3>
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={tomorrow}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    >
                      {formData.content || '*No content to preview*'}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>

            {/* Excerpt */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of the post (optional - will be auto-generated if empty)"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Publish Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                    Publish immediately
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                    Featured post
                  </label>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Image</h3>
              
              {formData.image ? (
                <div className="relative">
                  <img 
                    src={formData.image} 
                    alt="Featured" 
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Image URL..."
                  />
                  <div className="text-center text-sm text-gray-500">or</div>
                  <label className="block">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors cursor-pointer">
                      <Upload className="h-4 w-4" />
                      <span>{isUploading ? 'Uploading...' : 'Upload Image'}</span>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      checked={formData.categories.some(c => c.id === category.id)}
                      onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {tags.map((tag) => (
                  <div key={tag.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`tag-${tag.id}`}
                      checked={formData.tags.some(t => t.id === tag.id)}
                      onChange={(e) => handleTagChange(tag.id, e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`tag-${tag.id}`} className="ml-2 text-sm text-gray-700">
                      {tag.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
