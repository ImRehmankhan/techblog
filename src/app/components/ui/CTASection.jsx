import Link from 'next/link'

export default function CTASection({
  title = "Ready to Start Your React Journey?",
  description = "Join thousands of developers who are already learning with our tutorials and guides.",
  primaryButton = {
    text: "Browse Tutorials",
    href: "/blog"
  },
  secondaryButton = {
    text: "Learn More About Us",
    href: "/about"
  },
  className = ""
}) {
  return (
    <section className={`py-16 bg-gradient-to-br from-blue-600 to-purple-700 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButton.href}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {primaryButton.text}
            </Link>
            <Link
              href={secondaryButton.href}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
