const HtmlWebPackPlugin = require("html-webpack-plugin");
const SetUp404Plugin = require("./webpack/SetUp404Plugin");
module.exports = (env) => {
  return {
    mode: env.mode,
    entry: "./src/index.tsx",
    output: {
      path: __dirname,
      filename: "[name].portfolio.js",
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./template.html",
        filename: "./index.html",
      }),
      new SetUp404Plugin(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.pdf$/,
          use: "file-loader",
        },
        {
          test: /\.jpeg$/,
          use: "file-loader",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
