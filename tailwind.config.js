module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3E6C03',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    extend: {},
  },
  variants: {},
  plugins: [],
}