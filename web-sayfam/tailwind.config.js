/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#CBF281",
        "custom-blue": "#4731D3",
        "navy-blue": "#171043",
        "black-gray": "#1A210B",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}