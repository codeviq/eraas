/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    
    extend: {
      animation: {
        "blob": "blob 7s infinite"
      },
       backgroundColor: {
         'main-bg': '#FAFBFB',
         'main-sub-bg': '#FFFFFF',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },

      keyframes: {
        

        blob: {
          "0%": {
            transform : "translate(0px,0px) scale(1)",
          },
           "33%": {
            transform : "translate(30px,-50px) scale(1.1)",
          },
            "66%": {
            transform : "translate(-20px,20px) scale(0.9)",
          },
             "100%": {
            transform : "translate(0px,0px) scale(1)",
          },
        }
      },

       colors: {
        primary: '#fefefe',
         secondary: '#f1f1f1',
         btnColor: '#1B65A7',
        zincColor: '#d4d4d8',
      
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
}