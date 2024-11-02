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
      }
    },
  },
  plugins: [],
}
