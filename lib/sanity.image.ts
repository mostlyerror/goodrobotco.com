import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { dataset, projectId } from '@/sanity/env'

const builder = createImageUrlBuilder({ projectId, dataset })

/**
 * Generate optimized image URLs from Sanity image sources
 *
 * @example
 * const imageUrl = urlFor(post.featuredImage)
 *   .width(800)
 *   .height(600)
 *   .url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
