const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem"
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        }
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
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
