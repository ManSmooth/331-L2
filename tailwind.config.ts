import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        yellowfade: {
          '0%': { background: 'yellow' },
          '100%': { background: 'transparent' }
        }
      },
      animation: {
        flashMessage: 'yellowfade 3s ease-in-out'
      }
    }
  },
  plugins: []
} satisfies Config
