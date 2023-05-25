/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-dark": "#D87D4A",
        "orange-light": "#fbaf85",
        "black-light": "#101010",
        "gray-light": "#f1f1f1",
        "gray-veryLight": "#fafafa",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
