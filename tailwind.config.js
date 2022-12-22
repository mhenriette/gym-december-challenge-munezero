/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#072140',
        secondary:'#3070b3',
        myyellow:'#fed702',
      },
      backgroundImage:{
        'perspective': "url('/images/prospective.jpg')",
      },
    },
  },
  plugins: [],
}
