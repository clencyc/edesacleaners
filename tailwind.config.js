/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1fc600',
          600: '#089000',
          700: '#0a5d00',
          800: '#063b00',
          900: '#052e00',
        },
        accent: {
          light: '#0eff00',
          DEFAULT: '#1fc600',
          dark: '#089000',
        }
      }
    },
  },
  plugins: [],
};
