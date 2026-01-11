import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for build-time queries to ensure fresh data
})

/**
 * GROQ query to fetch all blog posts, sorted by published date (newest first)
 */
const allPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  author,
  publishedAt,
  seo
}`

/**
 * GROQ query to fetch a single blog post by slug
 */
const postBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  content,
  author,
  publishedAt,
  seo
}`

/**
 * TypeScript interfaces for blog post data
 */
export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  featuredImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  content?: any[] // Portable Text blocks
  author: string
  publishedAt: string
  seo?: {
    metaDescription?: string
    ogImage?: {
      asset: {
        _id: string
        url: string
      }
    }
  }
}

/**
 * Fetch all published blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch<BlogPost[]>(allPostsQuery)
    console.log('Fetched posts from Sanity:', posts?.length || 0, 'posts')
    if (posts && posts.length > 0) {
      console.log('First post:', posts[0])
    }
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await sanityClient.fetch<BlogPost | null>(postBySlugQuery, { slug })
    return post
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error)
    return null
  }
}
