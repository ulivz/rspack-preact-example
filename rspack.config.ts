import type { Configuration } from "@rspack/cli";
import path from "node:path";


export default {
  entry: {
    main: "./src/index.jsx",
  },
  experiments: {
    rspackFuture: {
      disableTransformByDefault: true,
    },
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.(js|jsx)$/,
        loader: "builtin:swc-loader",
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: "ecmascript",
              jsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
                importSource: 'preact'
              },
            },
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "builtin:swc-loader",
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: "typescript",
              jsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
                importSource: 'preact'
              },
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  builtins: {
    html: [
      {
        template: "./index.html",
        scriptLoading: "module",
      },
    ],
  },

  externalsType: "script",
} satisfies Configuration;
