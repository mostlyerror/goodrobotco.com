import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/sanity.client'
import { SEO } from '@/lib/seo.constants'
import { CASE_STUDIES } from '@/lib/case-studies.config'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch blog posts from Sanity at build time
  const blogPosts = await getAllBlogPosts()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SEO.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SEO.baseUrl}/ai-for-business`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SEO.baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SEO.baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SEO.baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SEO.baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // Add dynamic case study pages
  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: `${SEO.baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: study.priority,
  }))

  // Add dynamic blog post pages
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SEO.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...caseStudyPages, ...blogPostPages]
}
