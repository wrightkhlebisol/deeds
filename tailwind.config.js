/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deed-good': '#4ade80',
        'deed-meh': '#fbbf24',
        'deed-bad': '#f87171',
        'deed-good-300': '#6ee7b7',
        'deed-meh-300': '#fcd34d',
        'deed-bad-300': '#f87171',
      }
    },
  },
  plugins: [],
}
