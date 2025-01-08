/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      boxShadow: {
        'login-box': 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
      },
      colors: {
        primary: 'var(--color-primary)'
      }
    },
  },
  plugins: [],
}