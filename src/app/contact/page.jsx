import Link from 'next/link'
import { ArrowLeft, Mail, MessageSquare, Phone, MapPin, Send, Clock, Github, Twitter, Linkedin } from 'lucide-react'
import CTASection from '../components/ui/CTASection'

export async function generateMetadata() {
  return {
    title: 'Contact Us - TechBlog',
    description: 'Get in touch with the TechBlog team. We\'d love to hear from you about collaborations, questions, or feedback.',
    openGraph: {
      title: 'Contact Us - TechBlog',
      description: 'Get in touch with the TechBlog team. We\'d love to hear from you about collaborations, questions, or feedback.',
      type: 'website',
    },
  }
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'hello@techblog.com',
      link: 'mailto:hello@techblog.com',
      color: 'bg-blue-500'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Live Chat',
      description: 'Chat with our team during business hours',
      contact: 'Available Mon-Fri, 9AM-5PM EST',
      link: '#',
      color: 'bg-green-500'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone Support',
      description: 'Call us for urgent technical assistance',
      contact: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'bg-purple-500'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/techblog',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-6 w-6" />,
      url: 'https://twitter.com/techblog',
      color: 'hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://linkedin.com/company/techblog',
      color: 'hover:text-blue-600'
    }
  ]

  const faqs = [
    {
      question: 'Can you write a tutorial on a specific topic?',
      answer: 'Absolutely! We love hearing from our community about what they want to learn. Send us your topic suggestions and we\'ll consider them for future content.'
    },
    {
      question: 'Do you offer consulting or development services?',
      answer: 'Yes, our team offers consulting services for React and React Native projects. Contact us to discuss your project requirements and timeline.'
    },
    {
      question: 'How can I contribute to TechBlog?',
      answer: 'We welcome guest authors! If you have expertise in React/React Native and want to share your knowledge, reach out to us with your article ideas.'
    },
    {
      question: 'Can I use your code examples in my projects?',
      answer: 'Yes! All our code examples are provided under MIT license. You\'re free to use them in your personal and commercial projects.'
    }
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Reach Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a 
                    href={method.link}
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="tutorial-request">Tutorial Request</option>
                      <option value="guest-writing">Guest Writing</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="partnership">Partnership</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                      placeholder="Tell us about your project, question, or how we can help you..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      Subscribe to our newsletter for React tips and tutorials
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        123 Developer Street<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 4:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600">
                        We typically respond to emails within 24 hours during business days. 
                        For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't see your question here?{' '}
                <a href="mailto:hello@techblog.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  Send us an email
                </a>{' '}
                and we'll get back to you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
