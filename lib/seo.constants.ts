export const SEO = {
  baseUrl: 'https://goodrobotco.com',
  siteName: 'Good Robot Co.',

  organization: {
    name: 'Good Robot Co.',
    url: 'https://goodrobotco.com',
    logo: 'https://goodrobotco.com/og-image.png',
    description: 'Technology and growth consulting for small and mid-size businesses. Strategy, execution, and honest guidance to grow your revenue.',
    founder: { name: 'Ben Poon' },
    email: 'hello@goodrobotco.com',
    serviceTypes: ['Technology Consulting', 'Growth Consulting', 'Lead Generation', 'Sales Automation', 'Customer Retention', 'AI Integration', 'Process Automation', 'Web Development'],
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
