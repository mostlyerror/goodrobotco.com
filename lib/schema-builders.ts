import { SEO } from './seo.constants'
import type { Organization, BlogPosting, BreadcrumbList } from './jsonld.types'

export function buildOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO.organization.name,
    url: SEO.organization.url,
    logo: SEO.organization.logo,
    description: SEO.organization.description,
    founder: { '@type': 'Person', name: SEO.organization.founder.name },
    email: SEO.organization.email,
    serviceType: [...SEO.organization.serviceTypes],
  }
}

export function buildBlogPostingSchema(post: {
  title: string
  slug: string
  excerpt: string
  author: string
  publishedAt: string
  featuredImage?: { asset: { url: string } }
}): BlogPosting {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage?.asset?.url || `${SEO.baseUrl}${SEO.images.og.url}`,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SEO.organization.name,
      logo: { '@type': 'ImageObject', url: SEO.organization.logo },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SEO.baseUrl}/blog/${post.slug}` },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
