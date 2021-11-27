module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightWhite: 'rgba(255, 255, 255, 0.1)',
        bgBlack: '#0D0914',
        messageBlue: '#89E3FF',
        input: 'rgba(13, 9, 20, 0.2)',
        active: '#7D3AFB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
