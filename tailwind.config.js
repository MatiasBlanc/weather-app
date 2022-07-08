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
          300: '#282c4a',
          400: '#2e3256',
          500: '#32375d',
        },
        white: {
          '100': '#FFFFFF',
          '200': '#f1f1f1',
          '300': '#e3e3e3',
          '400': '#d4d4d4',
          '500': '#c6c6c6',
        }
      }
    },
  },
  plugins: [],
}