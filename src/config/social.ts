import { Github } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { X } from "@/components/icons/X";
import { Mail } from "@/components/icons/Mail";

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    username: 'ashar-AI',
    url: 'https://github.com/ashar-AI',
    icon: Github,
    display: true,
    type: 'social'
  },
  {
    name: 'LinkedIn',
    username: 'ashar-mirza',
    url: 'https://linkedin.com/in/ashar-mirza',
    icon: LinkedIn,
    display: true,
    type: 'professional'
  },
  {
    name: 'Twitter',
    username: 'ashar_mirza',
    url: 'https://twitter.com/ashar_mirza',
    icon: X,
    display: true,
    type: 'social'
  },
  {
    name: 'Email',
    username: 'ashar@asharmirza.com',
    url: 'mailto:ashar@asharmirza.com',
    icon: Mail,
    display: true,
    type: 'contact'
  },
  // {
  //   name: 'RSS',
  //   username: '',
  //   url: '/rss.xml',
  //   icon: Rss,
  //   display: true,
  //   type: 'rss'
  // }
] as const;

export type SocialLink = typeof SOCIAL_LINKS[number];

// Helper functions
export function getSocialLinks(type?: string): SocialLink[] {
  if (!type) return [...SOCIAL_LINKS];
  return SOCIAL_LINKS.filter(link => link.type === type);
}

export function getSocialLink(platform: string): SocialLink | undefined {
  return SOCIAL_LINKS.find(link => link.name.toLowerCase() === platform.toLowerCase());
}
