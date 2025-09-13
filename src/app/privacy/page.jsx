import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Database, Cookie, Mail } from 'lucide-react'

export async function generateMetadata() {
  return {
    title: 'Privacy Policy - TechBlog',
    description: 'Learn how TechBlog collects, uses, and protects your personal information.',
    openGraph: {
      title: 'Privacy Policy - TechBlog',
      description: 'Learn how TechBlog collects, uses, and protects your personal information.',
      type: 'website',
    },
  }
}

export default function PrivacyPolicyPage() {
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Overview */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              Quick Overview
            </h2>
            <p className="text-blue-800">
              We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="h-6 w-6 mr-3 text-blue-600" />
                Information We Collect
              </h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  We may collect the following personal information when you interact with our website:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Name and email address (when you subscribe to our newsletter)</li>
                  <li>Comments and feedback you provide on our blog posts</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Account information if you create an account</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Pages you visit and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide and improve our content and services</li>
                  <li>Send you newsletters and updates (with your consent)</li>
                  <li>Respond to your comments and inquiries</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Prevent spam and protect against fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Cookie className="h-6 w-6 mr-3 text-orange-600" />
                Cookies and Tracking
              </h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p className="text-gray-600">
                  You can control cookie settings through your browser preferences. Please note that disabling certain cookies may affect website functionality.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">
                  We use the following third-party services that may collect information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and embedded content</li>
                  <li><strong>Email Service Providers:</strong> For newsletter delivery and communication</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection and Security</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Limited access to personal information</li>
                  <li>Data retention policies</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-green-600" />
                Contact Us
              </h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@techblog.com</p>
                  <p><strong>Address:</strong> TechBlog Privacy Team, 123 Tech Street, Developer City, DC 12345</p>
                  <p><strong>Response Time:</strong> We aim to respond to all privacy inquiries within 30 days</p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
