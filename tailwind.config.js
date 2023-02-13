module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        "870px": {
          "max": "870px"
        },
        "600px": {
          "max": "600px"
        },
        "540px": {
          "max": "540px"
        },
        "420px": {
          "max": "420px"
        },
        "400px": {
          "max": "400px"
        }
      }
    },
  },
  plugins: [],
}