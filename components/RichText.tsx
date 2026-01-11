import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

interface RichTextProps {
  content: any[]
}

/**
 * Custom components for Portable Text rendering
 * Matches the site's design system (Tailwind classes)
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[17px] leading-relaxed text-charcoal">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-6 text-3xl md:text-4xl font-bold font-display text-charcoal">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-2xl md:text-3xl font-semibold font-display text-charcoal">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-4 text-xl md:text-2xl font-semibold font-display text-charcoal">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 border-l-4 border-coral italic text-charcoal-light">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-charcoal">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }) => (
      <code className="px-2 py-1 bg-sage-light text-charcoal rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const isExternal = href.startsWith('http')

      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-coral hover:text-coral-dark underline transition-colors"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null

      const imageUrl = urlFor(value.asset)
        .width(1200)
        .height(800)
        .fit('max')
        .auto('format')
        .url()

      return (
        <figure className="my-10">
          <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog post image'}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-charcoal-light italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-charcoal">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-charcoal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="pl-2 leading-relaxed">{children}</li>
    ),
  },
}

/**
 * RichText component for rendering Portable Text content from Sanity
 */
export default function RichText({ content }: RichTextProps) {
  if (!content || content.length === 0) {
    return null
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  )
}
