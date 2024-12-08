/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        liColor:"#cecece",
      },
      backgroundColor:{
        hamBurgerListBgColor:"#333",
      },
    },
  },
  plugins: [],
}

