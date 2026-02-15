import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SEO } from '@/lib/seo.constants'
import { JsonLd } from '@/components/JsonLd'
import { buildOrganizationSchema } from '@/lib/schema-builders'

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
  title: 'Technology & Growth Partner for Small Businesses | Good Robot Co.',
  description: SEO.organization.description,
  metadataBase: new URL(SEO.baseUrl),
  openGraph: {
    title: 'Technology & Growth Partner for Small Businesses | Good Robot Co.',
    description: SEO.organization.description,
    url: SEO.baseUrl,
    siteName: SEO.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: SEO.images.og.url,
        width: SEO.images.og.width,
        height: SEO.images.og.height,
        alt: SEO.images.og.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology & Growth Partner for Small Businesses | Good Robot Co.',
    description: SEO.organization.description,
    images: [SEO.images.og.url],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="80OeZtmps2zbJjrI"
          data-version="062024"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-cream text-charcoal text-[18px] leading-relaxed overflow-x-hidden font-body">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-coral focus:text-white focus:rounded-lg focus:font-semibold">
          Skip to main content
        </a>
        <JsonLd data={buildOrganizationSchema()} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
