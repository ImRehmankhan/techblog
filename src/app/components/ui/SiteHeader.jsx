'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  // Function to check if a navigation item is active
  const isActiveItem = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    if (href === '/blog') {
      // Only active for /blog and /blog/* but NOT for specific category pages
      return pathname === '/blog' || (pathname.startsWith('/blog/') && !pathname.startsWith('/blog/category/'))
    }
    return pathname === href || pathname.startsWith(href + '/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
      setSearchQuery('')
      setIsSearchOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'React.js', href: '/blog/category/reactjs' },
    { name: 'React Native', href: '/blog/category/react-native' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group z-10">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg lg:text-xl select-none">T</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  TechBlog
                </span>
                <span className="text-xs text-gray-500 font-medium hidden lg:block">
                  React & React Native Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = isActiveItem(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 font-medium text-sm xl:text-base transition-all duration-300 rounded-lg group ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 shadow-sm border border-blue-100'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-100'
                    }`}
                  >
                    {item.name}
                    {/* Active indicator bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 rounded-full ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    {/* Hover indicator bar */}
                    <div className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-300 rounded-full ${
                      isActive 
                        ? 'w-0 opacity-0' 
                        : 'w-0 group-hover:w-full group-hover:left-0 opacity-100'
                    }`}></div>
                  </Link>
                )
              })}
            </nav>

            {/* Right Section - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* CTA Button */}
              <Link
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Explore Articles
              </Link>
            </div>

            {/* Mobile Right Section */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-container p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <span 
                    className={`block h-0.5 w-6 bg-current rounded-sm transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></span>
                  <span 
                    className={`block h-0.5 w-6 bg-current rounded-sm transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span 
                    className={`block h-0.5 w-6 bg-current rounded-sm transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Search Bar - Collapsible */}
          {isSearchOpen && (
            <div className="border-t border-gray-100 py-4 lg:py-6">
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles, tutorials, and guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 lg:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm lg:text-base"
                    autoFocus
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
          <div className="mobile-menu-container fixed top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => {
                const isActive = isActiveItem(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Explore Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}
