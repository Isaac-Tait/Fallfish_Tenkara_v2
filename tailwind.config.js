module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontSize: {
      'tiny': '0.4rem',
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1.0rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3.0rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6.0rem',
      '9xl': '8.0rem',
    },
    extend: {
      colors: {
        red: {
          '500': '#D2132D',
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography')
  ],
}
