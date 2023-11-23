/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#13283F',
        'secondary': '#078FA5',
        'orange-eclessia': '#E67E22',
        'gris-eclessia': '#34495E',
        'white-eclessia': '#ECF0F1',
      }
    },
  },
  plugins: [],
}

