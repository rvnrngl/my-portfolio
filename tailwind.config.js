/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'khand': ['Khand', 'Sans-serif'],
        'switzer': ['Switzer', 'Sans-serif'],
      },
      keyframes: {
        arrowDrop: {
          '0%': {opacity: '0', transform: 'rotate(270deg) translate(5px, 0)'},
          '50%': {opacity: '1'},
          '100%': {opacity: '0', transform: 'rotate(270deg) translate(-5px, 0)'},
        },
      },
      animation: {
        'arrowDrop': 'arrowDrop 2s infinite',
      },
      colors: {
        'bg-color': '#004643',
        'headline': '#fffffe',
        'paragraph': '#abd1c6',
        'btn-color': '#f9bc60',
        'btn-text-color': '#001e1d'
      },
    },
  },
  plugins: [],
}

