import Link from 'next/link'
import { Youtube, Facebook, Instagram, Github, Linkedin, Mail } from 'lucide-react'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'All Articles', href: '/blog', icon: '📚' },
    { name: 'About Us', href: '/about', icon: '👥' },
    { name: 'Contact', href: '/contact', icon: '📧' },
    { name: 'Privacy Policy', href: '/privacy', icon: '🔒' },
    { name: 'Terms of Service', href: '/terms', icon: '📋' }
  ]

  const categories = [
    { name: 'React.js', href: '/blog/category/reactjs', icon: '⚛️', count: 25 },
    { name: 'React Native', href: '/blog/category/react-native', icon: '📱', count: 18 },
    { name: 'JavaScript', href: '/blog/category/javascript', icon: '🟨', count: 30 },
    { name: 'TypeScript', href: '/blog/category/typescript', icon: '🔷', count: 15 },
    { name: 'Next.js', href: '/blog/category/nextjs', icon: '⚫', count: 12 },
    { name: 'CSS & Styling', href: '/blog/category/css', icon: '🎨', count: 20 }
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: <Github size={20} />, color: 'hover:text-gray-300' },
    { name: 'YouTube', href: 'https://youtube.com', icon: <Youtube size={20} />, color: 'hover:text-red-400' },
    { name: 'Facebook', href: 'https://facebook.com', icon: <Facebook size={20} />, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com', icon: <Instagram size={20} />, color: 'hover:text-pink-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={20} />, color: 'hover:text-blue-300' },
    { name: 'Email', href: 'mailto:contact@techblog.com', icon: <Mail size={20} />, color: 'hover:text-green-400' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='23' cy='7' r='1'/%3E%3Ccircle cx='39' cy='7' r='1'/%3E%3Ccircle cx='7' cy='23' r='1'/%3E%3Ccircle cx='23' cy='23' r='1'/%3E%3Ccircle cx='39' cy='23' r='1'/%3E%3Ccircle cx='7' cy='39' r='1'/%3E%3Ccircle cx='23' cy='39' r='1'/%3E%3Ccircle cx='39' cy='39' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TechBlog
                </span>
                <span className="text-sm text-gray-400">React & React Native</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              🚀 Your ultimate destination for React.js and React Native tutorials, 
              best practices, and cutting-edge development techniques. Join our 
              community of passionate developers! 
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-gray-800 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg`}
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="mr-2">🔗</span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-2 rounded-lg hover:bg-gray-800/50 px-3 -mx-3"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="mr-2">📂</span>
              Categories
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href} 
                    className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 py-2 rounded-lg hover:bg-gray-800/50 px-3 -mx-3"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="mr-2">📬</span>
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get the latest tutorials, tips, and exclusive content delivered straight to your inbox! 
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
                <div className="absolute right-3 top-3.5 text-gray-400">
                  ✉️
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Subscribe Now</span>
                <span>🚀</span>
              </button>
            </form>
            
            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                <div className="text-xl font-bold text-blue-400">500+</div>
                <div className="text-xs text-gray-400">Subscribers</div>
              </div>
              <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                <div className="text-xl font-bold text-purple-400">50+</div>
                <div className="text-xs text-gray-400">Articles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm flex items-center">
                <span className="mr-2">©</span>
                {currentYear} TechBlog. Made with 
                <span className="mx-1 text-red-400 animate-pulse">❤️</span>
                for developers
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🌟</span>
                <span>Built with Next.js & Tailwind CSS</span>
              </div>
              <div className="flex space-x-4">
                <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  🗺️ Sitemap
                </Link>
                <Link href="/rss" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  📡 RSS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
    </footer>
  )
}
