import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Good Robot Co. | Technology That Works For Your Business',
  description: 'Technology consulting for small and mid-size businesses. Honest guidance, practical solutions, and the right tech approach for your needs.',
  metadataBase: new URL('https://goodrobotco.com'),
  openGraph: {
    title: 'Good Robot Co. | Technology That Works For Your Business',
    description: 'Technology consulting for small and mid-size businesses. Honest guidance, practical solutions, and the right tech approach for your needs.',
    url: 'https://goodrobotco.com',
    siteName: 'Good Robot Co.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Good Robot Co. - Technology That Works For Your Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good Robot Co. | Technology That Works For Your Business',
    description: 'Technology consulting for small and mid-size businesses. Honest guidance, practical solutions, and the right tech approach for your needs.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="bg-cream text-charcoal text-[17px] leading-relaxed overflow-x-hidden font-body">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
