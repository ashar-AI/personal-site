import type { CollectionEntry } from 'astro:content'
import type { Article, Person, WebSite, WithContext } from 'schema-dts'

import { projectMetaData } from './metaData'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/config'

export const mainWebsite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: import.meta.env.SITE,
  name: `${SITE_CONFIG.author.name} - ${SITE_CONFIG.title}`,
  description: SITE_CONFIG.author.bio,
  inLanguage: 'en_US'
}

export const projectWebsite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: `${import.meta.env.SITE}/projects/`,
  name: 'Projects',
  description: projectMetaData.description,
  inLanguage: 'en_US'
}

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_CONFIG.author.name,
  url: SITE_CONFIG.baseUrl,
  // image: `${import.meta.env.SITE}${avatar.src}`,
  sameAs: SOCIAL_LINKS
    .filter(link => link.type !== 'rss')
    .map(link => link.url),
  jobTitle: SITE_CONFIG.author.title,
  ...(SITE_CONFIG.author.company ? {
    worksFor: {
      '@type': 'Organization',
      name: SITE_CONFIG.author.company.name,
      url: SITE_CONFIG.author.company.url,
    }
  } : {})
}

export function getProjectSchema(post: CollectionEntry<'projects'>) {
  const articleStructuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.data.title,
    url: `${import.meta.env.SITE}/projects/${post.id}/`,
    image: {
      '@type': 'ImageObject',
      url: `${import.meta.env.SITE}${post.data.heroImage.src}/`
    },
    description: post.data.description,
    // datePublished
    publisher: personSchema,
    author: personSchema
  }
  return articleStructuredData
}
