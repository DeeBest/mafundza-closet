/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%': {
            'background-color': 'white',
          },
          '50%': {
            'background-color': 'pink',
          },
          '100%': {
            'background-color': 'white',
          },
        },
      },
      animation: {
        glow: '5s alternate ease-in-out infinite glow',
      },
    },
  },
  plugins: [],
};
