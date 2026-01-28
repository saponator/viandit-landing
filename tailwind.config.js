/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'viandit-orange': '#FF6B35',
        'viandit-black': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
