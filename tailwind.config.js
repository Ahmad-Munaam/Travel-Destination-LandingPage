/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:[
    'footer-animate',
  ],
  theme: {
    extend: {
      screens:{
        "3xl":'1537px',
        "4xl": '1720px',
        "xsm": {'max' : '438px'}
      }
    },
  },
  plugins: [],
}