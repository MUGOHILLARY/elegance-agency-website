/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#4b0014',
        wineDark: '#30000d',
        gold: '#c9a24a',
        cream: '#fbf7ef',
        ink: '#26191b',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        luxe: '0 18px 60px rgba(75, 0, 20, 0.12)',
      },
    },
  },
  plugins: [],
}