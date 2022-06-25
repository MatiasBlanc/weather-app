module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Mada: ['Mada', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#5755D9',
        secondary: '#2A298C',
        black: {
          100: '#33353F',
          200: '#22253F',
        },
        white: {
          '100': '#FFFFFF',
          '200': '#F7F7F7',
          '300': '#D1D2D4',
          '400': '#A9ACB1',
          '500': '#7F8A97',
        }
      }
    },
  },
  plugins: [],
}