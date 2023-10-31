const path = require("path");
const isDev = process.env.NODE_ENV === "development";

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: "./src/index.jsx",
  },
  //   experiments: {
  //     rspackFuture: {
  //       disableTransformByDefault: true,
  //     },
  //   },
  mode: isDev ? "development" : "production",
  builtins: {
    // react: {
    //   pragma: "h",
    //   pragmaFrag: "Fragment",
    // },
    html: [{ template: "./index.html" }],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  //   resolve: {
  //     alias: {
  //       react: "preact/compat",
  //       "react-dom/test-utils": "preact/test-utils",
  //       "react-dom": "preact/compat", // Must be below test-utils
  //       "react/jsx-runtime": "preact/jsx-runtime",
  //     },
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.jsx$/,
  //         use: {
  //           loader: "builtin:swc-loader",
  //           options: {
  //             jsc: {
  //               parser: {
  //                 syntax: "ecmascript",
  //                 jsx: true,
  //               },
  //               transform: {
  //                 react: {
  //                   development: isDev,
  //                   refresh: false,
  //                   // Preact support
  //                   // @see https://preactjs.com/guide/v10/getting-started#aliasing-in-webpack
  //                   pragma: "h",
  //                   pragmaFrag: "Fragment",
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.svg$/i,
  //         issuer: /\.[jt]sx?$/,
  //         use: [
  //           /**
  //            * @see https://react-svgr.com/docs/webpack/#use-your-own-babel-configuration
  //            */
  //           {
  //             loader: "babel-loader",
  //             options: {
  //               presets: ["preact", "env"],
  //             },
  //           },
  //           {
  //             loader: "@svgr/webpack",
  //             options: { babel: false },
  //           },
  //         ],
  //       },
  //     ],
  //   },
};
