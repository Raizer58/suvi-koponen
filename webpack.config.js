const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          }
        )
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "style.css" })
  ]
};
