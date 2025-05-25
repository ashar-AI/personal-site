import { SITE_CONFIG } from './site';

export const BLOG_CONFIG = {
  // Default author (can be overridden per post)
  defaultAuthor: {
    name: SITE_CONFIG.author.name,
    avatar: 'https://pbs.twimg.com/profile_images/1844918502857244678/oOYskFVA_400x400.jpg', // Replace with your avatar URL
    twitter: SITE_CONFIG.seo.twitter,
    website: SITE_CONFIG.baseUrl,
    bio: SITE_CONFIG.author.bio,
    title: SITE_CONFIG.author.title,
    email: SITE_CONFIG.author.email
  },
  
  // Default reading time (in minutes)
  defaultReadingTime: 5,
  
  // Blog settings
  postsPerPage: 10,
  recentPostsLimit: 5,
  
  // Default tags/categories
  defaultTags: [
    'development',
    'web',
    'javascript',
    'typescript',
    'react',
    'astro',
    'design',
    'ai',
    'machine learning',
    'productivity'
  ],
  
  // Social links for sharing
  socialLinks: {
    twitter: `https://twitter.com/${SITE_CONFIG.seo.twitter.replace('@', '')}`,
    github: `https://github.com/${SITE_CONFIG.author.username}`,
    linkedin: `https://linkedin.com/in/${SITE_CONFIG.author.username}`
  },
  
  // Blog metadata
  title: 'Learning, Building, and Documenting',
  description: `Articles, tutorials, and thoughts on Software Engineering and more.`
} as const;

export type BlogAuthor = typeof BLOG_CONFIG.defaultAuthor;
