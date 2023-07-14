// https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined
const webpack = require("webpack");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    // https://github.com/react-dnd/react-dnd/issues/3425
    "process/browser": require.resolve("process/browser"),
    // https://github.com/brix/crypto-js/issues/354
    crypto: require.resolve("crypto-browserify"),
  };
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"];
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];
  return config;
};
