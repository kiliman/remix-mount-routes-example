const { mountRoutes } = require("remix-mount-routes");
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const basePath = process.env.REMIX_BASEPATH ?? "";
module.exports = {
  ignoredRouteFiles: [".*"],
  publicPath: `${basePath}/build/`,
  assetsBuildDirectory: `public${basePath}/build`,
  routes: (defineRoutes) => mountRoutes("app", basePath, defineRoutes),
};
