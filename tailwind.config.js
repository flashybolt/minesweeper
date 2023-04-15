/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'custom': {
        100: '#aad455',
        200: '#b3db5e'
      },
    },
    extend: {},
  },
  plugins: [],
}

