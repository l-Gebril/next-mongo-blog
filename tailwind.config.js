/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '400px',
        xs: '525px',
        sm: '640px',
        md:'768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container: { center: true, padding: '1rem' },
      colors: {
        main: 'rgb(74 222 128)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}