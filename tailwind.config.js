/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          'from, to': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#2dd4bf' },
        }
      }
    },
  },
  plugins: [],
}
