const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Project Tracking",
    author: "Melanie Nolan",
    description: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Project Tracking Awesome",
        short_name: "Project Tracking Awesome",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.primary,
        icon: "static/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
