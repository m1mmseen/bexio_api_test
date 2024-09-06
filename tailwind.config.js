/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rvblue: {
          100: '#E5EBF3',
          200: '#B5C5DD',
          300: '#93AACD',
          400: '#7392BF',
          500: '#5076AE',
          600: '#436393',
          700: '#324a6d',
          800: '#263954',
          900: '#162130',
        },
      },
    },
  },
  plugins: [],
}
