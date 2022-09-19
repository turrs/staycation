/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3252DF",
        purple: "#152C5B",
        gray: "#E5E5E5",
        gray1: "#B0B0B0",
        pink: "#FF498B",
      },
    },
  },
  plugins: [],
};
