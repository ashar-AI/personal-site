import { SITE_CONFIG } from './site';

export const UI_CONFIG = {
  // Layout
  layout: {
    header: {
      height: '4rem',
      sticky: true
    },
    footer: {
      height: '4rem',
      showThemeToggle: true
    },
    container: {
      maxWidth: '80rem',
      padding: '0 1rem'
    }
  },
  
  // Typography
  typography: {
    font: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    }
  },
  
  // Colors
  colors: {
    primary: {
      DEFAULT: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
      foreground: '#FFFFFF'
    },
    secondary: {
      DEFAULT: '#10B981',
      light: '#34D399',
      dark: '#059669',
      foreground: '#FFFFFF'
    },
    background: {
      light: '#FFFFFF',
      dark: '#0F172A',
      DEFAULT: '#F8FAFC'
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
      tertiary: '#94A3B8',
      inverted: '#FFFFFF'
    }
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  // Animations
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  
  // Components
  components: {
    button: {
      base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      variants: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary'
      },
      sizes: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10'
      }
    },
    card: {
      base: 'rounded-xl border bg-card text-card-foreground shadow',
      header: 'flex flex-col space-y-1.5 p-6',
      title: 'text-2xl font-semibold leading-none tracking-tight',
      description: 'text-sm text-muted-foreground',
      content: 'p-6 pt-0',
      footer: 'flex items-center p-6 pt-0'
    }
  },
  
  // Theme
  theme: {
    defaultTheme: 'system',
    themes: ['light', 'dark', 'system']
  }
} as const;
