const { mountRoutes } = require('remix-mount-routes')
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const basePath = process.env.REMIX_BASEPATH ?? ''
module.exports = {
  ignoredRouteFiles: ['.*'],
  // publicPath: `${basePath}/build/`,
  // assetsBuildDirectory: `public${basePath}/build`,
  routes: defineRoutes => {
    const baseRoutes = mountRoutes(basePath, 'routes')
    const testRoutes = mountRoutes('/test', 'addins/test')

    const customRoutes = defineRoutes(route => {
      route('/some/path/*', 'addins/catchall.tsx')
    })
    const routes = {
      ...baseRoutes,
      ...testRoutes,
      ...customRoutes,
    }
    console.log(routes)
    return routes
  },
}
