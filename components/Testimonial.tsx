import Image from 'next/image'

interface TestimonialProps {
  quote: string
  author: string
  title?: string
  company?: string
  image?: string
  size?: 'default' | 'large'
}

export default function Testimonial({
  quote,
  author,
  title,
  company,
  image,
  size = 'default',
}: TestimonialProps) {
  const isLarge = size === 'large'

  return (
    <div className={`bg-white border-l-4 border-sage rounded-r-lg shadow-sm ${isLarge ? 'p-8' : 'p-6'}`}>
      {/* Quote */}
      <p className={`text-charcoal font-semibold mb-4 ${isLarge ? 'text-xl md:text-2xl' : 'text-xl'}`}>
        &quot;{quote}&quot;
      </p>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {image && (
          <Image
            src={image}
            alt={author}
            width={isLarge ? 64 : 48}
            height={isLarge ? 64 : 48}
            className={`rounded-full object-cover ring-2 ring-cream ${isLarge ? 'w-16 h-16' : 'w-12 h-12'}`}
          />
        )}
        <div>
          <p className="text-charcoal font-semibold">{author}</p>
          {(title || company) && (
            <p className="text-charcoal/60 text-sm">
              {title && title}
              {title && company && ', '}
              {company && company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
