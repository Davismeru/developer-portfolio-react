/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d7a038",
        heading: "#a8a29e",
        buttons: "#4b5563",
        spans: "#fb923c",
      },
    },
  },
  plugins: [],
};
