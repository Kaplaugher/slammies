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
        themewhite: "#f5f5f5",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
