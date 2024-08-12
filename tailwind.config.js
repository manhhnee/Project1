/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'desktop-header-height': '74px',
      },
      maxWidth: {
        'desktop-header-max-width': '1230px',
      },
      gridTemplateColumns: {
        'custom-layout': '1fr max-content 1fr',
      },
      colors: {
        'barcelona-header': 'rgba(255, 255, 255, 0.85)',
      },
    },
  },
  plugins: [],
};
