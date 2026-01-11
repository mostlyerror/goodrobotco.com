import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import HeroSimple from '@/components/HeroSimple'
import RichText from '@/components/RichText'
import CTA from '@/components/CTA'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity.image'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

/**
 * Generate static params for all blog posts at build time
 * This enables static site generation for dynamic routes
 */
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * Generate metadata for SEO (title, description, Open Graph, Twitter Cards)
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found | Good Robot Co.',
    }
  }

  const metaDescription = post.seo?.metaDescription || post.excerpt || `Read ${post.title} on the Good Robot Co. blog.`
  const ogImageUrl = post.seo?.ogImage?.asset?.url
    ? post.seo.ogImage.asset.url
    : post.featuredImage?.asset?.url
    ? urlFor(post.featuredImage.asset).width(1200).height(630).url()
    : '/og-image.png'

  return {
    title: `${post.title} | Good Robot Co. Blog`,
    description: metaDescription,
    openGraph: {
      title: post.title,
      description: metaDescription,
      url: `https://goodrobotco.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: metaDescription,
      images: [ogImageUrl],
    },
  }
}

/**
 * Blog post page component
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero with title and excerpt */}
      <HeroSimple
        title={post.title}
        subtitle={post.excerpt}
        maxWidth="max-w-4xl"
      />

      {/* Blog Post Content */}
      <article className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-charcoal-light mb-8">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-12 rounded-3xl overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={urlFor(post.featuredImage.asset).width(1200).height(675).url()}
                  alt={post.featuredImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            {post.content && <RichText content={post.content} />}
          </div>
        </div>
      </article>

      {/* CTA */}
      <CTA
        headline="Have a question or project in mind?"
        subheadline="Let's talk about what you're trying to accomplish. No sales pitch, just a real conversation about your business."
      />
    </>
  )
}
