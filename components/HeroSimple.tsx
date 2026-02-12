interface HeroSimpleProps {
  title: string
  subtitle: string
  label?: string
  maxWidth?: string
}

export default function HeroSimple({
  title,
  subtitle,
  label,
  maxWidth = "max-w-3xl"
}: HeroSimpleProps) {
  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-cream">
      <div className={`${maxWidth} mx-auto px-6 md:px-12`}>
        {label && (
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">{title}</h1>
        <p className="text-xl text-charcoal-light">{subtitle}</p>
      </div>
    </section>
  )
}
