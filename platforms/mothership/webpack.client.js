const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const deps = require("./package.json").dependencies;
const path = require("path");

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: '/',
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".mjs"],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_01",
      filename: "remoteEntry.js",
      remotes: {
        app_02: "app_02@http://localhost:30020/remoteEntry.js",
        app_03: "app_03@http://localhost:30030/remoteEntry.js",
        app_04: "app_04@http://localhost:30040/remoteEntry.js",
        app_05: "app_05@http://localhost:30050/remoteEntry.js",
      },
      exposes: {
        "./MainLayout": "./src/MainLayout",
      },
      shared: {
        ...deps,
        "react-router-dom": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};