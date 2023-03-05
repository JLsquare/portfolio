/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-cyan-100':'#05111b',
        'custom-cyan-200':'#90a8b1',
      },
      transitionProperty: {
        'width': 'width'
      }
    }
  },
  plugins: []
}
