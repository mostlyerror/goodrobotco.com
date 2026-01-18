export type JSONLDContext = { '@context': 'https://schema.org' }

export type Organization = JSONLDContext & {
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  founder: { '@type': 'Person'; name: string }
  email: string
  serviceType: string[]
}

export type BreadcrumbList = JSONLDContext & {
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }>
}

export type BlogPosting = JSONLDContext & {
  '@type': 'BlogPosting'
  headline: string
  description: string
  image: string
  author: { '@type': 'Person'; name: string }
  publisher: { '@type': 'Organization'; name: string; logo: { '@type': 'ImageObject'; url: string } }
  datePublished: string
  dateModified: string
  mainEntityOfPage: { '@type': 'WebPage'; '@id': string }
}

export type FAQPage = JSONLDContext & {
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: { '@type': 'Answer'; text: string }
  }>
}
