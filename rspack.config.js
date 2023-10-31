const path = require("path");
const isDev = process.env.NODE_ENV === "development";

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: "./src/index.jsx",
  },
  mode: isDev ? "development" : "production",
  builtins: {
    html: [{ template: "./index.html" }],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat", // Must be below test-utils
        "react/jsx-runtime": "preact/jsx-runtime",
      },
    },
};
