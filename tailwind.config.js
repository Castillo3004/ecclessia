/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007A7B',
        'secondary': '#0F2A3D',
        'yellow-eclessia': '#FDA029',
        'white-eclessia': '#ECF0F1',
      }
    },
  },
  plugins: [],
}

