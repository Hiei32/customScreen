const path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    port: 8084, // 端口号
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("views", resolve("src/views"))
      .set("static", resolve("src/static"))
      .set("common", resolve("src/common"));
  },
  publicPath: "/",
  outputDir: process.env.outputDir
};
