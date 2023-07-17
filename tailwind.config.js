/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite", // "blob" yg didalam petik referensi nama dari keyframes.blob 
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          '33%': {
            transform: "translate(30px, -50px) scale(1.2)"
          },
          '66%': {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          '100%': {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      colors: {
        primary: '#ff923e',
        primaryHover: '#ed8739',
        lightPrimary: '#f1ebe2',
        dark: '#091434'
      }
    },
  },
  plugins: [],
}

