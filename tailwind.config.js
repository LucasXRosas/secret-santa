/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: ['src/**/*.{html,ts}', 'components/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#D6C2FF',
        secondary: '#FFD700',
        accent: '#A7FFB5',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Public Sans', 'sans-serif'],
      },
    },
  },
  extend: {
    borderRadius: {
      brand: '0px',
    },
  },
  plugins: [],
};
