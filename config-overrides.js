const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@api": path.resolve(__dirname, "src", "api"),
    "@assets": path.resolve(__dirname, "src", "assets"),
    "@components": path.resolve(__dirname, "src", "components"),
    "@hooks": path.resolve(__dirname, "src", "hooks"),
    "@routes": path.resolve(__dirname, "src", "routes"),
    "@styles": path.resolve(__dirname, "src", "styles"),
    "@utils": path.resolve(__dirname, "src", "utils"),
    "@images": path.resolve(__dirname, "public", "images"),
  })
);
