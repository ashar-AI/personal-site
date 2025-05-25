# Configuration Guide

This document explains how to configure your personal site after forking or setting it up locally.

## Configuration Structure

The site uses a centralized configuration system located in the `src/config` directory. Here's an overview of each configuration file:

### 1. `site.ts`

Contains site-wide configurations:

```typescript
{
  title: "Site Title",
  description: "Site description",
  domain: "yourdomain.com",
  baseUrl: "https://yourdomain.com",
  author: {
    name: "Your Name",
    email: "your.email@example.com",
    // ... other author details
  },
  // ... other site settings
}
```

### 2. `social.ts`

Manages all social media links and configurations:

```typescript
export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    username: 'yourusername',
    url: 'https://twitter.com/yourusername',
    display: true,
    type: 'social'
  },
  // ... other social links
];
```

### 3. `integrations.ts`

Configures third-party services:

```typescript
export const INTEGRATIONS = {
  github: {
    username: 'yourusername',
    repository: 'your-repo',
    enabled: true
  },
  // ... other integrations
};
```

### 4. `ui.ts`

Controls the visual appearance and layout:

```typescript
export const UI_CONFIG = {
  layout: { /* ... */ },
  typography: { /* ... */ },
  colors: { /* ... */ },
  // ... other UI settings
};
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# GitHub
GITHUB_ACCESS_TOKEN=your_github_token

# Spotify (optional)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

# Analytics (optional)
UMAMI_WEBSITE_ID=your_umami_id
UMAMI_SRC=your_umami_src
UMAMI_DOMAIN=your_umami_domain
```

## Customization Steps

1. **Update Site Information**
   - Modify `src/config/site.ts` with your personal details
   - Update the favicon and other assets in `public/`

2. **Configure Social Links**
   - Update `src/config/social.ts` with your social media profiles
   - Set `display: false` for any social links you don't want to show

3. **Set Up Integrations**
   - Update `src/config/integrations.ts` with your GitHub username and repository
   - Configure other services as needed

4. **Customize UI**
   - Modify `src/config/ui.ts` to match your preferred colors, fonts, and layout

5. **Update Content**
   - Replace placeholder content in `src/content/` with your own
   - Update the homepage in `src/pages/index.astro`

## Deployment

1. Update the `site` URL in `astro.config.mjs`
2. Configure your deployment platform (Vercel, Netlify, etc.) with the required environment variables
3. Deploy your site

## Maintenance

- Keep your dependencies up to date with `npm update`
- Check the GitHub repository for updates and merge them as needed
- Regularly back up your content and configuration

## Troubleshooting

- If you encounter build errors, check the error messages in your terminal
- Make sure all required environment variables are set
- Check the browser's developer console for client-side errors
- Refer to the documentation of individual integrations for specific issues
