import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'
import { getAllBlogPosts } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity.image'

export const metadata: Metadata = {
  title: 'Blog | Good Robot Co.',
  description: 'Practical insights on technology, AI, and building smarter systems for small and mid-size businesses. No jargon, just actionable advice.',
  openGraph: {
    title: 'Blog | Good Robot Co.',
    description: 'Practical insights on technology, AI, and building smarter systems for small and mid-size businesses. No jargon, just actionable advice.',
    url: 'https://goodrobotco.com/blog',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Good Robot Co. Blog - Practical Tech Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Good Robot Co.',
    description: 'Practical insights on technology, AI, and building smarter systems for small and mid-size businesses. No jargon, just actionable advice.',
    images: ['/og-image.png'],
  },
}

export default async function Blog() {
  const posts = await getAllBlogPosts()
  const [featuredPost, ...remainingPosts] = posts

  return (
    <>
      <HeroSimple
        title="Blog"
        subtitle="Practical insights on technology, AI, and building smarter systems, without the jargon."
        maxWidth="max-w-6xl"
      />

      {/* Blog Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block bg-white rounded-3xl overflow-hidden mb-16 hover:shadow-xl transition-shadow duration-300 no-underline text-charcoal"
            >
              <div className="grid md:grid-cols-2">
                {featuredPost.featuredImage ? (
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={urlFor(featuredPost.featuredImage.asset).width(800).height(600).url()}
                      alt={featuredPost.featuredImage.alt || featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="bg-sage-light h-64 md:h-auto flex items-center justify-center text-8xl">
                    🤖
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1.5 bg-coral text-white text-sm font-semibold rounded-full mb-5 w-fit">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-charcoal-light mb-6">
                    {featuredPost.excerpt || 'Read more to learn about this topic.'}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-charcoal-light mb-4">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <time>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  </div>
                  <span className="text-coral font-semibold">Read the full article →</span>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining Posts Grid */}
          {remainingPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 no-underline text-charcoal"
                >
                  {post.featuredImage ? (
                    <div className="relative h-48">
                      <Image
                        src={urlFor(post.featuredImage.asset).width(600).height(400).url()}
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="bg-sage-light h-48 flex items-center justify-center text-6xl">
                      📝
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-charcoal-light text-sm mb-4 line-clamp-3">
                      {post.excerpt || 'Read more to learn about this topic.'}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-charcoal-light">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-charcoal-light mb-4">No blog posts yet.</p>
              <p className="text-charcoal-light">Check back soon for practical insights on technology and AI.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Have a question or project in mind?"
        subheadline="Let's talk about what you're trying to accomplish. No sales pitch, just a real conversation about your business."
      />
    </>
  )
}
