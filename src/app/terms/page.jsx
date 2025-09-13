import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, Mail } from 'lucide-react'

export async function generateMetadata() {
  return {
    title: 'Terms of Service - TechBlog',
    description: 'Terms and conditions for using TechBlog website and services.',
    openGraph: {
      title: 'Terms of Service - TechBlog',
      description: 'Terms and conditions for using TechBlog website and services.',
      type: 'website',
    },
  }
}

export default function TermsOfServicePage() {
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
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our website and services.
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
          
          {/* Quick Agreement */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Agreement to Terms
            </h2>
            <p className="text-green-800">
              By accessing and using TechBlog, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="h-6 w-6 mr-3 text-blue-600" />
                Acceptance of Terms
              </h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">
                  These Terms of Service ("Terms") govern your use of TechBlog website and services. By accessing or using our website, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Be bound by these Terms and our Privacy Policy</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Respect the rights of other users and content creators</li>
                  <li>Accept any updates or modifications to these Terms</li>
                </ul>
              </div>
            </section>

            {/* Use of Service */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Use of Service</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Permitted Use</h3>
                <p className="text-gray-600 mb-4">You may use our website to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Read and share our articles and tutorials</li>
                  <li>Comment on blog posts and engage in discussions</li>
                  <li>Subscribe to our newsletter and updates</li>
                  <li>Learn and implement the techniques we teach</li>
                  <li>Share our content with proper attribution</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Prohibited Use
                </h3>
                <p className="text-red-800 mb-4">You may NOT use our website to:</p>
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li>Copy, reproduce, or redistribute our content without permission</li>
                  <li>Attempt to reverse engineer or hack our website</li>
                  <li>Post spam, malicious content, or inappropriate material</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Interfere with the proper functioning of our website</li>
                </ul>
              </div>
            </section>

            {/* Content and Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Content and Intellectual Property</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Content</h3>
                <p className="text-gray-600 mb-4">
                  All content on TechBlog, including articles, tutorials, code examples, images, and design, is protected by copyright and other intellectual property laws. This content is owned by TechBlog or our content creators.
                </p>
                <p className="text-gray-600">
                  You may view, download, and print our content for personal, non-commercial use only. Any other use requires our explicit written permission.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Generated Content</h3>
                <p className="text-gray-600 mb-4">
                  When you submit comments, feedback, or other content to our website, you grant us a non-exclusive, royalty-free license to use, modify, and display that content. You represent that:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>You own or have the right to submit the content</li>
                  <li>Your content doesn't violate any laws or third-party rights</li>
                  <li>Your content is accurate and not misleading</li>
                </ul>
              </div>
            </section>

            {/* Privacy and Data */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Collection</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our use of your personal information is governed by our Privacy Policy. By using our services, you consent to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Collection and use of data as described in our Privacy Policy</li>
                  <li>Use of cookies and tracking technologies</li>
                  <li>Email communications (which you can opt out of at any time)</li>
                  <li>Analytics and performance monitoring</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  For detailed information about how we handle your data, please review our 
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-800 ml-1">Privacy Policy</Link>.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimers and Limitations</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Purpose</h3>
                <p className="text-gray-600">
                  Our content is provided for educational and informational purposes only. While we strive for accuracy, we make no warranties about the completeness, reliability, or suitability of the information for any particular purpose.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">No Warranty</h3>
                <p className="text-yellow-800">
                  Our website and content are provided "as is" without any warranty of any kind. We disclaim all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
                <p className="text-gray-600">
                  To the fullest extent permitted by law, TechBlog shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or content.
                </p>
              </div>
            </section>

            {/* Third-Party Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Links and Services</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">
                  Our website may contain links to third-party websites, products, or services. These links are provided for your convenience only. We do not:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Endorse or guarantee third-party content or services</li>
                  <li>Control the content or policies of external websites</li>
                  <li>Accept responsibility for third-party practices</li>
                  <li>Warrant the accuracy of external information</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Your use of third-party websites is subject to their own terms and conditions.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600 mb-4">
                  We reserve the right to terminate or suspend your access to our website at any time, without notice, for conduct that we believe:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Violates these Terms of Service</li>
                  <li>Is harmful to other users or our business</li>
                  <li>Violates applicable laws or regulations</li>
                  <li>Is otherwise inappropriate or objectionable</li>
                </ul>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800">
                  We may update these Terms of Service from time to time. When we do, we will post the updated terms on this page and update the "Last updated" date. Your continued use of our website after any changes constitutes your acceptance of the new terms.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className="text-gray-600">
                  These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction]. 
                  Any disputes arising from these terms or your use of our website will be resolved in the courts of [Your Jurisdiction].
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-green-600" />
                Contact Us
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@techblog.com</p>
                  <p><strong>Address:</strong> TechBlog Legal Team, 123 Tech Street, Developer City, DC 12345</p>
                  <p><strong>Response Time:</strong> We aim to respond to all legal inquiries within 7 business days</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
