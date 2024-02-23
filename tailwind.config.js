/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nice-green': '#445D48',
        'nice-nude': '#FDE5D4'
      },
      fontFamily: {
        'amatic': ['Amatic SC', 'sans-serif']
      },
      height: {
        '128': '32rem'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

