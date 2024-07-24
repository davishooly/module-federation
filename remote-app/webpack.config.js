const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "remoteApp",
    publicPath: "auto",
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/main.ts",
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
