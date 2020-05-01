/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: "#40514e",
        themeblue: "#2f89fc",
        themegreen: "#30e3ca",
        themewhite: "#f5f5f5"
      },
      height: {
        "600px": "600px"
      },
      fontFamily: {
        title: "Montserrat",
        body: "Roboto"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
