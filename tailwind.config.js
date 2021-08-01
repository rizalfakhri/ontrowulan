module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-green': '#0A4234',
        'brand-gold': '#D4BD8C',
        'brand-gold-darker': '#C4A15C',
      },
      boxShadow: {
        'around': '10px 10px 60px -18px rgba(0, 0, 0, 1)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
