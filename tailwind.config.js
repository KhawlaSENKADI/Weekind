/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'], // Define 'Outfit' as a custom font family
      },
      colors: {
        customPurple: '#004CFF',
        customRed: '#FC3C4C',
      },
    },
  },
  plugins: [],
}

