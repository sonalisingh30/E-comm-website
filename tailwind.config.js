/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4263eb",
        secondary: "#63e6be",
      },
    
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
      }
    },
  },
},
  darkMode:"selector",
  plugins: [],
};