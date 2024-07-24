
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "shellApp",
    publicPath: "auto",
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        remoteApp: "http://localhost:8081/remoteEntry.js",
      },
      shared: {
        "@angular/core": {
          singleton: false,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true
        },
        "@angular/common": {
          singleton: false,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true
        },
        "@angular/router": {
          singleton: false,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true
        },
      },
    }),
  ],
};

