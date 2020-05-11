require("./src/css/tailwind.css")

exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    document.body.className = document.body.className.replace(/\bno-js\b/, "")
  })
}
