/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#cc0000',
        dark: '#0a0a0a',
        card: '#141414',
        border: '#222222',
      },
    },
  },
  plugins: [],
};
