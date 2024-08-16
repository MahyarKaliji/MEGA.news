/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      backgroundPosition: {
        weather: "center top 1rem",
      },
      colors: {
        logo: "#FC4308",
        btnGray: "#F5F5F5",
        dark: "#3E3232",
        primary: "rgba(245, 21, 57, .75)",
        dark5: "rgba(62, 50, 50, .05)",
        play_btn_bg: "rgba(255, 255, 255, .75)",
        redGrad: "linear-gradient(to left, #F81539, #FC4308)",
      },
      backgroundImage: {
        sportWidget: "url('../images/sport/06.jpg')",
        weatherImg: "url('../images/weather/04.jpg')",
        weatherGrdt:
          "linear-gradient(to bottom right, rgba(251, 68, 28, .91), rgba(251, 202, 28, .6))",
      },
    },
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    fontFamily: {
      main: ["Roboto"],
    },
  },
  plugins: [],
};
