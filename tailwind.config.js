/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)', // Your gradient definition
      },
    },
  },
  plugins: [],
}