const config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { midnight: '#020617', aurora: '#38bdf8', plasma: '#8b5cf6' },
      fontFamily: { sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'] },
      boxShadow: { glow: '0 0 60px rgba(56,189,248,.24)' },
    },
  },
  plugins: [],
}

export default config
