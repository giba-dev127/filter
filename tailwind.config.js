/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        dev: {
          '100': '#FFD990',
        },
        txt: {
          '100': '#929292',
        }
      },
    },
    screens: {
        xs: "614px",
        s: "769px",
        sm: "1002px",
        md: "1022px",
        lg: "1092px",
        xl: "1280px"
    },
  },
  plugins: [
    '@tailwindcss/forms'
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}