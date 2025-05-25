interface AuthorCompany {
  name: string;
  url: string;
}

interface Author {
  name: string;
  email: string;
  username: string;
  fullName: string;
  title: string;
  location: string;
  bio: string;
  company?: AuthorCompany;
}

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  domain: string;
  baseUrl: string;
  author: Author;
  features: {
    darkMode: boolean;
    rss: boolean;
    sitemap: boolean;
    analytics: boolean;
  };
  seo: {
    defaultImage: string;
    twitter: string;
  };
  navigation: {
    main: NavItem[];
    footer: NavItem[];
  };
}

export const SITE_CONFIG: SiteConfig = {
  // Site metadata
  title: "Ashar Mirza",
  description: "Personal portfolio and blog of Ashar Mirza, a software engineer",
  domain: "asharmirza.com",
  baseUrl: "https://asharmirza.com",
  
  // Author information
  author: {
    name: "Ashar Mirza",
    email: "ashar@asharmirza.com",
    username: "ashar-AI",
    fullName: "Ashar Mirza",
    title: "Software Engineer",
    location: "Tokyo, Japan",
    bio: "Building things for the web with a focus on user experience and performance.",
    company: {
      name: "Freelance",
      url: "https://asharmirza.com"
    }
  },
  
  // Site features
  features: {
    darkMode: true,
    rss: true,
    sitemap: true,
    analytics: true
  },
  
  // SEO defaults
  seo: {
    defaultImage: "/images/og-image.jpg",
    twitter: "@ashar_mirza"
  },
  
  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" }
    ],
    footer: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
      { name: "Uses", href: "/uses" },
      { name: "Now", href: "/now" },
      { name: "RSS", href: "/rss.xml", external: true }
    ]
  }
} as const
