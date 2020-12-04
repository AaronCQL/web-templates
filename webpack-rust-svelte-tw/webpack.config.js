const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const crate = path.resolve(__dirname, "crate");
const dist = path.resolve(__dirname, "dist");
const public = path.resolve(__dirname, "public");
const src = path.resolve(__dirname, "src");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(src, "index.js"),
  },
  output: {
    path: dist,
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  devServer: {
    contentBase: dist,
  },
  plugins: [
    // injects required scripts into index.html
    new HtmlWebpackPlugin({
      template: path.resolve(public, "index.html"),
    }),

    // copy all files in public folder to dist (ignores index.html)
    new CopyPlugin({
      patterns: [
        {
          from: public,
          globOptions: {
            dot: true,
            ignore: [path.resolve(public, "index.html")],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new WasmPackPlugin({
      crateDirectory: crate,
      watchDirectories: [crate],
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          // MiniCssExtractPlugin doesn't support HMR;
          // for developing, use 'style-loader' instead:
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
};
