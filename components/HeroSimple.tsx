interface HeroSimpleProps {
  title: string
  subtitle: string
  maxWidth?: string
}

export default function HeroSimple({ 
  title, 
  subtitle, 
  maxWidth = "max-w-3xl" 
}: HeroSimpleProps) {
  return (
    <section className="pt-40 pb-20 bg-white border-b border-charcoal/5">
      <div className={`${maxWidth} mx-auto px-6`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">{title}</h1>
        <p className="text-xl text-charcoal-light">{subtitle}</p>
      </div>
    </section>
  )
}
