export const theme = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    text: 'var(--color-text)',
    textLight: 'var(--color-text-light)',
    background: 'var(--color-background)',
    backgroundLight: 'var(--color-background-light)',
    border: 'var(--color-border)',
    success: '#10B981',
    error: '#EF4444',
  },
  fonts: {
    body: "'Inter', sans-serif",
    mono: "'Roboto Mono', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof theme; 