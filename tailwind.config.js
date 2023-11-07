/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center:true,
      padding:{
        DEFAULT: '1rem',
        sm: '0.6rem',
        lg: '5rem',
        xl: '8rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [],
}

