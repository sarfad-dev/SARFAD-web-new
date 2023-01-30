/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      colors: {
        background: {
        100: "#192a3b",
        200: "#162535;",
        }
      },
      screens: {
        'xs': {"min": '600px'},
        // => @media (min-width: 600px) { ... }
        'ne': {"min": '815px'},
        // => @media (min-width: 815px) { ... }
        },
    },
  },
  plugins: [],
}
