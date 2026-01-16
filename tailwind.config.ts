import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDF6E9',
          dark: '#F5EBD8',
        },
        charcoal: {
          DEFAULT: '#2A2A2A',
          light: '#4A4A4A',
        },
        coral: {
          DEFAULT: '#E8654A',
          hover: '#D45A42',
        },
        sage: {
          DEFAULT: '#7BA37B',
          light: '#E8F0E8',
        },
        mustard: {
          DEFAULT: '#E5B94E',
          light: '#FEF7E0',
        },
        lavender: {
          DEFAULT: '#9B8DC2',
          light: '#F0EDF7',
        },
        sky: {
          DEFAULT: '#6BA3C9',
          light: '#E8F2F8',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 1s',
        'float-fast': 'float 5s ease-in-out infinite 0.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }),
  ],
}

export default config
