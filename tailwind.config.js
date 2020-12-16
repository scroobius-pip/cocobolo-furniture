// const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      pop: 'Poppins'
    },
    extend: {
      colors: {
        wine: '#942B32',
        black: '#000',
        pink: '#FFE8EA'
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      zIndex: ['hover']
    },
  },
  plugins: [],
}
