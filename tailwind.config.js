/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pro: {
          primary: 'rgb(157, 71, 10)', // The client's rust orange
          dark: '#1a1a1a',
          light: '#f5f5f5'
        }
      }
    },
  },
  plugins: [],
}