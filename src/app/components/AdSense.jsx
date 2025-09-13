'use client'

import { useEffect, useRef } from 'react'

export default function AdSense({ 
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' }
}) {
  const adRef = useRef(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    const loadAd = () => {
      try {
        // Check if the ad element exists and hasn't been loaded
        if (!adRef.current || isLoaded.current) return

        // Check if the ad element already has content (ad loaded)
        if (adRef.current.innerHTML.trim() !== '' || adRef.current.children.length > 0) {
          isLoaded.current = true
          return
        }

        // Initialize adsbygoogle array if it doesn't exist
        if (typeof window !== 'undefined') {
          window.adsbygoogle = window.adsbygoogle || []
          
          // Only push if the element is empty and not already processed
          if (adRef.current && !adRef.current.hasAttribute('data-adsbygoogle-status')) {
            window.adsbygoogle.push({})
            isLoaded.current = true
          }
        }
      } catch (err) {
        console.error('AdSense loading error:', err)
      }
    }

    // Load ad immediately if DOM is ready
    if (adRef.current) {
      loadAd()
    }

    // Also try loading after a short delay to ensure scripts are loaded
    const timeoutId = setTimeout(loadAd, 100)

    return () => clearTimeout(timeoutId)
  }, [adSlot])

  // Don't render ads if no client ID is provided
  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) {
    return (
      <div style={style} className="bg-gray-100 p-4 text-center text-gray-500 text-sm">
        AdSense placeholder (Add NEXT_PUBLIC_ADSENSE_CLIENT_ID to enable)
      </div>
    )
  }

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={style}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  )
}
