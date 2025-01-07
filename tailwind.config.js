/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#26B888',
        'primary-green-ripple': '#069868',
        'primary-red': '#DA1E28',
        'custom-gray': '#F0F0F0',
        'custom-green': '#ECF4E2',
        'custom-lightGreen': '#F2F6EC',
        'custom-lightGray': '#F8F8F8',
        'custom-disabled': '#A3A3A3',
        'custom-01': '#111111',
        'custom-02': '#404040',
        'custom-03': '#6F6F6F',
        'custom-04': '#B5B5B5',
        'custom-blue': '#5165E7',
      },
    },
  },
  plugins: [],
};
