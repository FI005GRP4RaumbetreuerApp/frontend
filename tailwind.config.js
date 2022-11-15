/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      spacing: {
        128: '32rem',
      },
      colors: {
        primary: '#5B9BD5',
        secondary: '#71AEE4',
        backgroundGray: '#D9D9D9',
      },
    },
  },
  plugins: [],
}
