const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: __dirname,
        filename: "portfolio.js"
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html"
        })
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
}