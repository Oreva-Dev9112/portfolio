import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-display)', 'serif'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-inverse': 'var(--bg-inverse)',
        fg: 'var(--fg)',
        muted: 'var(--fg-muted)',
        subtle: 'var(--fg-subtle)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'accent-glow': 'var(--accent-glow)',
        deep: 'var(--deep)',
        'deep-soft': 'var(--deep-soft)',
      },
      maxWidth: {
        prose: '680px',
        wide: '1240px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring-soft': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      fontSize: {
        'display-xxl': ['clamp(72px, 12vw, 180px)', { lineHeight: '0.88', letterSpacing: '-0.045em' }],
        'display-xl': ['clamp(56px, 9vw, 130px)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(40px, 6vw, 80px)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(28px, 3.5vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};

export default config;
