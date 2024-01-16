/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#0E1117",
        secondary: "#14181D",
        yellow: "#FFD832",
        background: "#F2F7FF",
        grey: "#818992"
      },
      fontFamily: {
        gilroyRegular: ['Gilroy-Regular', 'sans-serif'],
        gilroyMd: ['Gilroy-Medium', 'sans-serif'],
        gilroyLight: ['Gilroy-Light', 'sans-serif'],
        gilroyItalic: ['Gilroy-Italic', 'sans-serif'],
        gilroyHeavy: ['Gilroy-Heavy', 'sans-serif'],
        gilroyBold: ['Gilroy-Bold', 'sans-serif'],
      },
      // fontFamily: {
      //   bold: ['bold', 'sans-serif'],
      //   light: ['light', 'sans-serif'],
      //   medium: ['medium', 'sans-serif'],
      //   semiBold: ['semibold', 'sans-serif'],
      //   extraBold: ['extraBold', 'sans-serif'],
      //   regular: ['regular', 'sans-serif'],
      //   regularItalic: ['regularItalic', 'sans-serif'],
      // }
    },
  },
  plugins: [require("tailwindcss-animate")],
}