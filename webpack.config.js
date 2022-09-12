const HtmlWebPackPlugin = require("html-webpack-plugin");
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
        template: "./index.html",
      }),
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
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
