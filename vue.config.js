const path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    port: 8084, // 端口号
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16,
            selectorBlackList: ['el'], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ]
      }
    }
  },
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
