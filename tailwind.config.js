/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        fade:"fadeInAnimation 2s linear",
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        fadeInAnimation: {
          '0%': {
            'opacity' : '0'
          },
          '100%':{
            'opacity': '1'
          }
        }
      },
      fontFamily: {
        'cedarville': ['Cedarville Cursive', 'cursive'],
        'alfa':['Alfa Slab One', 'cursive'],
        'carter':['Carter One', 'cursive'],
        'bondoni':['Bodoni Moda', 'serif'],
        'rockSalt' :['Rock Salt', 'cursive'],
        'nabla' :['Nabla', 'cursive'],
        'changa' :['Changa', 'sans-serif']
      }
    },
  },
  plugins: [],
}
