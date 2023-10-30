/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono,monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },

  plugins: [],
};
