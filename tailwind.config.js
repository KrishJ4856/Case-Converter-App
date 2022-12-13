/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./code/index.js"
  ],
  theme: {
    extend: {
      keyframes: {
        vibrate: {
          "0%": { transform: "rotate(1deg)" },
          "25%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(-1deg)" },
          "100%": { transform: "rotate(1deg)" }
        }
      },
      animation: {
        vibrate: "vibrate .3s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}
