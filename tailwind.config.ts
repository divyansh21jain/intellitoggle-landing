import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#42389e',
          light: '#6f66c2',
          dark: '#0f1026',
          50: '#ecebf5',
          100: '#e3e0ff',
          200: '#c4bff9',
          300: '#978df4',
          400: '#695bf0',
          500: '#5242ed',
          600: '#42389e',
          700: '#352d7e',
          800: '#1a1a1a',
          900: '#0f1026',
        },
        accent: {
          DEFAULT: '#f9a71e',
          light: '#ffebc9',
        },
        text: {
          title: '#2e2e2e',
          body: '#414141',
          muted: '#5d5d5e',
          dark: '#3d3d3d',
          light: '#676669',
        },
      },
      boxShadow: {
        card: '0px 5.653px 14.132px 0px rgba(0,0,0,0.15)',
        testimonial: '0px 4px 10px 0px rgba(0,0,0,0.1)',
        btn: '0px 4px 4px 0px rgba(0,0,0,0.25)',
        dashboard: '0px 4px 30px 20px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config
