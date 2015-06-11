module.exports = {
  entry: { app: ["./src/entry.js"] },
  output: { filename: "build/[name].js" },
  devtool: "#source-map",
  module: { loaders: [ {test: /\.js$/, loader: "babel"} ] }
};