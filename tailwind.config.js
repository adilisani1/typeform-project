module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'apercu': ['Apercu', 'sans-serif'],
      },
    },
  },

  plugins: [require("daisyui")],
}