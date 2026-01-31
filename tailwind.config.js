/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'viandit-orange': '#21c36b',
        'viandit-black': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
