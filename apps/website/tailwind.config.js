const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        dark: '#282C38',
        warning: '#ECD126',
        'light-warning': 'rgba(236, 209, 38, 0.14)',
        secondary: '#757B8C',
        black: '#1E1F25',
      },
      boxShadow: {
        button: '0px 8px 20px rgba(236, 209, 38, 0.25)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xxs: 10,
      },
      letterSpacing: {
        theme: '0.04em',
      },
      margin: {
        6.5: '26px',
        7.5: '30px',
        10.5: '42px',
        15: '60px',
        18: '72px',
      },
      padding: {
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
        8.5: '34px',
        10.5: '42px',
      },
      lineHeight: {
        5.5: '22px',
      },
      borderRadius: {
        2.5: '10px',
        5: '20px',
      },
    },
  },
  plugins: [],
  important: true,
};
