/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EEEDEB",
        secondary: "#E0CCBE",
        btcolor:"#3C3633"
      }
    },
  },
  plugins: [],
}