/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}", "./*.{html,js}"],
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
        dark50: "rgba(62, 50, 50, .5)",
        dark75: "rgba(62, 50, 50, .75)",
        play_btn_bg: "rgba(255, 255, 255, .75)",
        redGrad: "linear-gradient(to left, #F81539, #FC4308)",
        insta_active: "rgba(248, 21, 57, 0.75)",
        hashtag: "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        sportWidget: "url('../images/sport/06.jpg')",
        weatherImg1: "url('../images/weather/04.jpg')",
        weatherImg2: "url('../images/city/03.jpg')",
        weatherImg3: "url('../images/weather/12.jpg')",
        weatherImg4: "url('../images/city/01.jpg')",
        weatherGrdt1:
          "linear-gradient(to bottom right, rgba(251, 68, 28, .91), rgba(251, 202, 28, .6))",
        weatherGrdt2:
          "linear-gradient(to bottom right, rgba(28, 50, 251, 0.91), rgba(28, 251, 224, .6))",
        weatherGrdt3:
          "linear-gradient(to bottom right, rgba(7, 156, 39, .91), rgba(192, 255, 113, .6))",
        weatherGrdt4:
          "linear-gradient(to bottom right, rgba(113, 28, 251, .91), rgba(251, 28, 148, .6))",
        insta_hover: "linear-gradient(to bottom left, #F45C9F , #FF7563 )",
        twitter: "linear-gradient(to bottom left, #2CA5E0 , #67C9F5 )",
        topTagsGradient:
          "radial-gradient(circle at 70% 50%, rgba(245, 245, 245, 1) 52%, rgba(245, 245, 245, 0.3827) 82%, rgba(245, 245, 245, 0) 100%)",
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
