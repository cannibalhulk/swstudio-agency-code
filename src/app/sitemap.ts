import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shukurwebstudio.com'
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/ai-prompts',
    '/blogs',
    '/contact',
    '/legal-notice',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}

