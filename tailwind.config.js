const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Jost"'],
      },
    },
    screens: {
      'tablet': '640px',
      ...defaultTheme.screens,
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
