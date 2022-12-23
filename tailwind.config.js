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
        'xs': {"max": '475px'},
        // => @media (max-width: 475px) { ... }
        }
    },
  },
  plugins: [],
}
