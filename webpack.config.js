var 
  path = require("path");

module.exports = {
  entry: "entry.js",
  output: {
    path: path.join(__dirname, "release"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax" },
      { test: /\.html/, loader: 'file?name=[name].[ext]' }
    ]
  },
  resolve: {
    modulesDirectories: [
      "source",
      "test"
    ]
  }
};