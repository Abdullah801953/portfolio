/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        liColor: "#cecece",
        lightBg: "#c3c34c",
      },
      backgroundColor: {
        hamBurgerListBgColor: "#333",
      },
    
    },
  },
  plugins: [],
};
