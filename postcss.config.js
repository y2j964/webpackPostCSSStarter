const path = require("path");

/* eslint-disable global-require */
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [path.resolve(__dirname, "src", "**/*.js")],
  css: ["./src/css/main.css"],
  // ignore any --is- modifier class
  whitelistPatterns: [/--is-/],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-custom-media"),
    require("postcss-nested"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
