/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '520px',
      },
      fontFamily: {
        'Poppins': "Poppins",
        'Roboto': "Roboto Slab",
      },
      colors: {
        'background': '#FEF9A7',
        'darkbackground': '#2C2C2C',
        'cardbackground': '#333333',
        'footerbackground': '#121212',
        'blue': '#1E88E5',
        'pink': '#FF4081',
        // 'middlepastel': '#79A3B1',
        // 'darkpastel': '#456268',
        // 'dark': '#000000',
        // 'white': '#FFFFFF',
        // 'pink': '#DA396E',
        'jolpai': '#B2BB1E',
        'orange': '#F49D1A',
        'redd': '#DC3535',
        'sky': '#5D87A1',
        'darkyellow': '#FAC213',
        'lightyellow': '#FFFFB7',
        'green': '#309C08',
        'magenta': '#B01E68'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

