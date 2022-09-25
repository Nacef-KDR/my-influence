/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'myinfluence-blue':'#032958',
        'myinluence-background':'#f8f8f8',
        'myinfluence-profile-bg':'#ffafb0',
        'myinfluence-profile-text':'#153b65',
        'myinfluence-button':'#ff5f5f', 
        width: {
          '125': '28rem',
        },
      }
    },
  },
  plugins: [],
}
