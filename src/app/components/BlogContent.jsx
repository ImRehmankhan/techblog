'use client'

import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'

// Lazy load syntax highlighter only when needed
const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then(mod => mod.Prism),
  { 
    loading: () => <div className="bg-gray-100 p-4 rounded animate-pulse">Loading code...</div>,
    ssr: false 
  }
)

export default function BlogContent({ content }) {
  return (
    <div className="prose prose-lg max-w-none mb-12">
      <ReactMarkdown
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const inline = !className
            return !inline && match ? (
              <div className="my-4">
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  className="rounded-lg"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={`${className} px-1 py-0.5 bg-gray-100 rounded text-sm font-mono`} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}