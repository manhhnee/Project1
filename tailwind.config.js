/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'login-shadow': '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      },
      height: {
        'desktop-header-height': '74px',
      },
      width: {
        'desktop-search-page-width': '572px',
      },
      maxWidth: {
        'desktop-header-max-width': '1230px',
      },
      gridTemplateColumns: {
        'custom-layout': '1fr max-content 1fr',
      },
      colors: {
        'barcelona-header': 'rgba(255, 255, 255, 0.85)',
        'gradient-from': '#ff4b2b',
        'gradient-to': '#ff416c',
        'primary-text': 'rgb(0, 0, 0)',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none' /* Firefox */,
          '-ms-overflow-style': 'none' /* Internet Explorer and Edge */,
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none' /* Safari and Chrome */,
        },
      });
    },
  ],
};
