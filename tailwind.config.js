/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        garage: {
          black: 'var(--garage-black)',
          dark: 'var(--garage-dark)',
          card: 'var(--garage-card)',
          border: 'var(--garage-border)',
          silver: 'var(--garage-silver)',
          white: 'var(--garage-white)',
          red: '#E53E3E',
          'red-glow': '#FF2D20',
          gold: '#D4A843',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #E53E3E' },
          '100%': { boxShadow: '0 0 25px #E53E3E, 0 0 50px #E53E3E40' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
