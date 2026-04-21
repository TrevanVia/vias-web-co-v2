import { useEffect } from 'react'

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title
    ? `${title} | VIA'S`
    : "VIA'S | Websites for Small Businesses in the NRV"
  const desc = description || 'Floyd-based web design for small businesses across the New River Valley. Flat pricing, 14-day turnarounds, no agency nonsense.'
  const url = `https://viaswebco.com${path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', desc)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:url', url, 'property')

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [fullTitle, desc, url])

  return null
}
