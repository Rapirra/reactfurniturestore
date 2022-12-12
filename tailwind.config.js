/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'openSans': ['openSans' ,'sans-serif'],
      'federo': ['federo', 'serif']
    },
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'new4': 'repeat(4, minmax(255px, 350px))'
        },
      

    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [],
}
