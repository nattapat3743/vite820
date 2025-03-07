/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#012E40',
        primaryContent: '#024959',
        primarySubcontent: '#026773',
        primaryBase: '#024959',
        primaryAccent: '#3CA6A6',
        primaryBg: '#F2E3D5',
      },
    },
  },
  plugins: [],
}

