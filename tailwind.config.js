module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 100%, 68%)",
        light: "hsl(0, 97%, 76%)",
        neutral: {
          "100": "hsl(207, 33%, 95%)",
          "200": "hsl(230, 11%, 40%)",
          "300": "hsl(230, 29%, 20%)",
          "400": "hsl(231, 7%, 65%)",
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
      },
      fontSize: {
        "4xxl": "2.5rem",
      },
      letterSpacing: {
        wide: "0.17em",
        widest: "0.28em",
      },
      spacing: {
        "50": "50%",
        "70": "70%",
      },
      inset: {
        "2": "2rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
