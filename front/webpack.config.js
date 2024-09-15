const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    index: "./scripts/index.js",
    films: "./scripts/createFilm.js",
    delete: "./scripts/deleteFilm.js",
    update: "./scripts/updateFilm.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  plugins: [new Dotenv({
    systemvars: true
  })],
  mode: "development",
};
