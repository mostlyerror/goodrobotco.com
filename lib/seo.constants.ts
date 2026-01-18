export const SEO = {
  baseUrl: 'https://goodrobotco.com',
  siteName: 'Good Robot Co.',

  organization: {
    name: 'Good Robot Co.',
    url: 'https://goodrobotco.com',
    logo: 'https://goodrobotco.com/og-image.png',
    description: 'Technology consulting for small and mid-size businesses. Honest guidance, practical solutions, and the right tech approach for your needs.',
    founder: { name: 'Ben Poon' },
    email: 'hello@goodrobotco.com',
    serviceTypes: ['Technology Consulting', 'Web Development', 'Process Automation', 'AI Integration'],
  },

  images: {
    og: {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Good Robot Co. - Technology That Works For Your Business',
    },
  },
} as const
