const HtmlWebPackPlugin = require("html-webpack-plugin");
const SetUpFallBackForGithubPagesSPAPlugin = require("./webpackplugins/SetUpFallBackForGithubPagesSPAPlugin");
const ScrubOldBuildFilesPlugin = require("./webpackplugins/ScrubOldBuildFilesPlugin");
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
      new SetUpFallBackForGithubPagesSPAPlugin(),
      new ScrubOldBuildFilesPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
    },
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
