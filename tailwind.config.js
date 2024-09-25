/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#17202a",
        "secondary": "#f1c40f",
        "tertiary": "#f0f3f4",
      }
    },
  },
  plugins: [],
}