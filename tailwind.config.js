/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [
    "./src/**/*.{html,ts}",
    "./components/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'on-primary': "#FFFFFF",
        'primary-container': "#D6C2FF",
        'on-primary-container': "#000000",
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
