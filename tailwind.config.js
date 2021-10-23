module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'wohn': ['Area','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif']
    },
    colors: {
      current: '#00603f',
      green: {
        default: '#00603f',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
