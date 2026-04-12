/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#635388",
        'on-primary': "#FFFFFF",
        'primary-container': "#D6C2FF",
        'on-primary-container': "#000000",
        secondary: "#A7FFB5",
        accent: "#FFD700",
        background: "#F6F6F6",
        surface: "#FFFFFF",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Public Sans", "sans-serif"],
      },
      borderRadius: {
        brand: "0px",
      }
    },
  },
  plugins: [],
}
