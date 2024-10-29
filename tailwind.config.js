/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deed-green': '#4ade80',
        'deed-yellow': '#fbbf24',
        'deed-red': '#f87171',
      }
    },
  },
  plugins: [],
}
