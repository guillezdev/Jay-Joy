/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-banner': "url('/../dist//assets/main-banner3.webp')",
        
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        fondo: '#3C475B',
        grisFondo: '#D9D9D9',
        primaryColor: '#439D99',
        negro: '#05070B',
        whiteTextFooter: '#E9E9E9',
        grayTextFooter: '#909090',
      },
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
        secondary: ['Playfair Display'],
      },
    },
  },
  plugins: [],
}