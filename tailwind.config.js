/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(180, 83, 9)",
        secondary: "#d97706"
      }
    },
  },
  plugins: [],
}