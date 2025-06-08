// External service integrations configuration
export const INTEGRATIONS = {
  github: {
    username: 'ashar-AI',
    repository: 'personal-site', // TODO: Change this to your personal site repository
    apiUrl: 'https://api.github.com',
    enabled: true
  },
  spotify: {
    enabled: false,
    apiUrl: 'https://api.spotify.com/v1',
    authUrl: 'https://accounts.spotify.com/api/token'
  },
  analytics: {
    umami: {
      enabled: false,
      websiteId: '',
      src: '',
      domain: ''
    },
    googleAnalytics: {
      enabled: false,
      trackingId: ''
    }
  },
  comments: {
    giscus: {
      enabled: false,
      repo: '',
      repoId: '',
      category: 'General',
      categoryId: '',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      theme: 'preferred_color_scheme'
    }
  }
} as const;

// GitHub specific configuration
export const GITHUB_CONFIG = {
  username: INTEGRATIONS.github.username,
  repository: INTEGRATIONS.github.repository,
  api: {
    baseUrl: INTEGRATIONS.github.apiUrl,
    user: `${INTEGRATIONS.github.apiUrl}/users/${INTEGRATIONS.github.username}`,
    repos: `${INTEGRATIONS.github.apiUrl}/users/${INTEGRATIONS.github.username}/repos`,
    repo: `${INTEGRATIONS.github.apiUrl}/repos/${INTEGRATIONS.github.username}/${INTEGRATIONS.github.repository}`,
    commits: `${INTEGRATIONS.github.apiUrl}/repos/${INTEGRATIONS.github.username}/${INTEGRATIONS.github.repository}/commits`,
    graphql: 'https://api.github.com/graphql'
  }
} as const;
