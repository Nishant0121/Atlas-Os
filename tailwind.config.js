/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1e1e1e",
        light: "#f2f2f2",
        peim_light: "#D4ADFC",
        prim_dark: "#3A1078",
      },
    },
  },
  plugins: [],
};
