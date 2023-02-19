/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        opensans: ['Open Sans']
      },
      colors: {
        'pink': 'hsl(322, 100%, 66%)',
        'very-pale-cyan': 'hsl(193, 100%, 96%)',
        'very-dark-cyan': 'hsl(192, 100%, 9%)',
        'grayish-blue': 'hsl(208, 11%, 55%)'
      },
      boxShadow: {
        'btn-shadow': '0px 1px 5px hsla(220, 24%, 79%, 0.758)',
        'section': '0px -3px 15px hsla(220, 3%, 79%, 0.758), 0px 3px 15px hsla(220, 3%, 79%, 0.758)',
        'banner-btn-shadow': '0 -8px 10px -4px hsla(0, 0%, 85%, 0.582)'
      },
      screens: {
        'xs': '500px'
      }
    },
  },
  plugins: [],
}
