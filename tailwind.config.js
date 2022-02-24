module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(4.857deg)' },
          '100%': { transform: 'rotate(-3deg)' },
            // '0,100%' : {transform : 'translateZ(20px)'},
            // '100%' : {transform : ' translateZ(20px) , rotateX(calc(var(--mouse-y) * 45deg)) rotateY(calc(var(--mouse-x) * 45deg))'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors :{
        purple : '#ab2f9e',
        green  : "rgb(117 167 43)",
        brown : "rgb(169 134 45)",
        orange : "rgb(201 90 27)",
        darkGreen : "#289560",
        darkPurple : "#8840ae",
        blue : "#0969b4",
        pink : "#c9447f",
        lightBlue : "#f2f6fb",
      },
      fontSize : {
        '16px' : '16px'
      }
    },
  },
  plugins: [],
}
