const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: require.resolve("path-browserify"),
    os: false
  };

  config.plugins = [...config.plugins, new NodePolyfillPlugin()];
  return config;
};
