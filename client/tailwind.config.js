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
        backDrop: 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: (theme) => ({
        dashBg: "url('./assets/dashBg.png')",
        rookie: "url('./assets/rookie.png')",
        amateur: "url('./assets/amateur.png')",
        blur: "url('./assets/blur.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
