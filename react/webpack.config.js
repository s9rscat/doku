const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = async (env, options) => {
  const currentEnv = env.env ?? options.mode;
  return {
    devtool: currentEnv === "development" ? "source-map" : undefined,
    entry: { client: "./src/index.tsx", react: ["react", "react-dom"] },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: "babel-loader",
          },
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: "file-loader", // You may use url-loader here as well
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        chunks: ["react", "client"],
      }),
      new Dotenv({ path: "./.env" }),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: ["./node_modules"],
      fallback: {
        path: false,
        os: false,
        crypto: false,
        "react/jsx-runtime": "react/jsx-runtime.js",
        "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      },
    },
    devServer: {
      hot: true, // Enable HMR in the development server
      historyApiFallback: true,
      watchFiles: {
        paths: ["src/**/*", "public/**/*"],
        options: {
          usePolling: false,
        },
      },
    },
  };
};
