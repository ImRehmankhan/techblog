import Link from 'next/link'
import { ArrowLeft, Users, Target, Heart, Award, Github, Twitter, Linkedin, Code, Lightbulb, Coffee } from 'lucide-react'

export async function generateMetadata() {
  return {
    title: 'About Us - TechBlog',
    description: 'Learn about TechBlog, our mission to provide quality React.js and React Native tutorials, and meet our team of passionate developers.',
    openGraph: {
      title: 'About Us - TechBlog',
      description: 'Learn about TechBlog, our mission to provide quality React.js and React Native tutorials, and meet our team of passionate developers.',
      type: 'website',
    },
  }
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Senior React Developer & Founder',
      bio: 'With 8+ years of experience in React development, John founded TechBlog to share his passion for modern web development.',
      image: '/api/placeholder/150/150',
      social: {
        github: 'https://github.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe'
      },
      skills: ['React.js', 'Next.js', 'TypeScript', 'Node.js']
    },
    {
      name: 'Jane Smith',
      role: 'React Native Expert',
      bio: 'Jane specializes in mobile development with React Native and has built over 20 successful mobile applications.',
      image: '/api/placeholder/150/150',
      social: {
        github: 'https://github.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith'
      },
      skills: ['React Native', 'Mobile Development', 'iOS', 'Android']
    },
    {
      name: 'Mike Johnson',
      role: 'Full Stack Developer',
      bio: 'Mike brings expertise in both frontend and backend development, focusing on scalable React applications.',
      image: '/api/placeholder/150/150',
      social: {
        github: 'https://github.com/mikejohnson',
        twitter: 'https://twitter.com/mikejohnson',
        linkedin: 'https://linkedin.com/in/mikejohnson'
      },
      skills: ['React.js', 'Node.js', 'PostgreSQL', 'AWS']
    }
  ]

  const stats = [
    { label: 'Articles Published', value: '150+', icon: <Code className="h-8 w-8" /> },
    { label: 'Developers Helped', value: '50K+', icon: <Users className="h-8 w-8" /> },
    { label: 'Code Examples', value: '500+', icon: <Lightbulb className="h-8 w-8" /> },
    { label: 'Coffee Consumed', value: '2000+', icon: <Coffee className="h-8 w-8" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About TechBlog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering developers with quality React.js and React Native tutorials, best practices, and real-world insights.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TechBlog was born from a simple idea: make React development accessible to everyone. 
              Started in 2020 by a group of passionate developers, we've grown into a community-driven 
              platform that helps thousands of developers learn, grow, and build amazing applications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center text-blue-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Mission */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide high-quality, practical tutorials and insights that help developers 
                  master React.js and React Native, from beginners to advanced practitioners.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the go-to resource for React developers worldwide, fostering a community 
                  where knowledge is shared freely and everyone can grow together.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Quality content, community collaboration, continuous learning, and making 
                  complex concepts simple and accessible for all skill levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Practical Tutorials</h3>
                </div>
                <p className="text-gray-600">
                  Step-by-step guides that take you from concept to implementation, 
                  with real code examples you can use in your projects.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Best Practices</h3>
                </div>
                <p className="text-gray-600">
                  Learn industry-standard practices, optimization techniques, and 
                  patterns that will make you a better React developer.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Community Support</h3>
                </div>
                <p className="text-gray-600">
                  Join our community of developers, ask questions, share your projects, 
                  and learn from others' experiences.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Latest Trends</h3>
                </div>
                <p className="text-gray-600">
                  Stay updated with the latest React ecosystem developments, new libraries, 
                  and emerging patterns in the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='23' cy='7' r='1'/%3E%3Ccircle cx='39' cy='7' r='1'/%3E%3Ccircle cx='7' cy='23' r='1'/%3E%3Ccircle cx='23' cy='23' r='1'/%3E%3Ccircle cx='39' cy='23' r='1'/%3E%3Ccircle cx='7' cy='39' r='1'/%3E%3Ccircle cx='23' cy='39' r='1'/%3E%3Ccircle cx='39' cy='39' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Join Our{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Ready to level up your React skills? Subscribe to our newsletter and never miss 
              our latest tutorials, tips, and insights.
            </p>
            
            {/* Newsletter Form */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 text-lg rounded-xl border-0 text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-500 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transform hover:scale-105 transition-all duration-300">
                  Subscribe Now
                </button>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <p className="text-white font-medium">Weekly Tutorials</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💡</div>
                <p className="text-white font-medium">Pro Tips & Tricks</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-white font-medium">Exclusive Content</p>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="text-center">
              <p className="text-blue-200 text-sm mb-2">
                ✨ No spam, unsubscribe anytime
              </p>
              <p className="text-white font-semibold">
                Join <span className="text-yellow-300">10,000+</span> developers already subscribed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
