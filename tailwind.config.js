const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  theme: {

    colors: {
      ...colors,
      white: {
        light: "#FFFFFF",
        DEFAULT: "#fafafa",
        dark: "#EAEAEA"
      },
      black: {
        light: "#3B3B3B",
        DEFAULT: "#121212",
        dark: "#000000"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100')
            },
          }
        }
      })
    },
  },
  plugins: [
    require("@tailwindcss/typography")],
}
