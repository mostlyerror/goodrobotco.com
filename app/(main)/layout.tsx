import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { buildOrganizationSchema } from '@/lib/schema-builders'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
