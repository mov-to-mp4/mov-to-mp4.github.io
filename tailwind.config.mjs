/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          khaki: '#D9D28B',
          sage: '#B2BD7E',
          moss: '#8E9162',
          forest: '#6A795D',
          darkInk: '#2C3527',
          forestHover: '#4E5B44',
          darkBg: '#181D16',
          darkSurface: '#262E22',
          darkWorkspace: '#1F261C',
        },
        bgPrimary: 'var(--bg-primary)',
        bgSurface: 'var(--bg-surface-card)',
        workspaceBg: 'var(--workspace-box-bg)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        btnPrimary: 'var(--primary-action-button)',
        btnPrimaryHover: 'var(--primary-action-hover)',
        btnPrimaryText: 'var(--primary-action-text)',
        badgeAccent: 'var(--secondary-accent-badge)',
        borderTheme: 'var(--border-color)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        workspace: '0 20px 50px -12px rgba(44, 53, 39, 0.14)',
        workspaceDark: '0 20px 50px -12px rgba(0, 0, 0, 0.55)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.015)', opacity: '0.92' },
        },
        filmScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 0' },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2.6s ease-in-out infinite',
        filmScroll: 'filmScroll 1s linear infinite',
      },
    },
  },
  plugins: [],
};
