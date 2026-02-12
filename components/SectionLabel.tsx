export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">
      {children}
    </span>
  )
}
