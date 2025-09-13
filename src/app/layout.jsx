import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/ui/SiteHeader";
import SiteFooter from "./components/ui/SiteFooter";
import Providers from "./providers";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechBlog - React.js & React Native Tutorials",
  description: "Your go-to source for React.js and React Native tutorials, tips, and best practices. Learn modern web and mobile development with expert insights.",
  keywords: ["React.js", "React Native", "JavaScript", "Web Development", "Mobile Development", "Tutorials"],
  authors: [{ name: "TechBlog Team" }],
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TechBlog - React.js & React Native Tutorials",
    description: "Your go-to source for React.js and React Native tutorials, tips, and best practices.",
    type: "website",
    locale: "en_US",
    url: 'https://your-domain.com',
    siteName: 'TechBlog',
    images: [
      {
        url: '/og-image.png', // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'TechBlog - React.js & React Native Tutorials',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBlog - React.js & React Native Tutorials",
    description: "Your go-to source for React.js and React Native tutorials, tips, and best practices.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add after setting up Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TechBlog",
              "description": "Your go-to source for React.js and React Native tutorials, tips, and best practices.",
              "url": "https://your-domain.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-domain.com/blog/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TechBlog",
                "url": "https://your-domain.com"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <SiteHeader />
          <main className="flex-grow">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
