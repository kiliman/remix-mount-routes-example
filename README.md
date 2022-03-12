# Remix Mount Routes Example

This example shows how to mount your Remix app to something other than root. In
this case, our app is mounted to `/myapp`. Notice how my route files in `app/routes`
has not been moved.

This example uses the `remix-mount-routes` package. https://github.com/kiliman/remix-mount-routes

The example app is running at https://remix-mount-routes-example.herokuapp.com

Here's the updated _remix.config.js_ file

```ts
// remix.config.js
const { mountRoutes } = require('remix-mount-routes')
const basePath = process.env.REMIX_BASEPATH ?? ''
module.exports = {
  ignoredRouteFiles: ['.*'],
  publicPath: `${basePath}/build/`,
  assetsBuildDirectory: `public${basePath}/build`,
  routes: defineRoutes => mountRoutes('app', basePath, defineRoutes),
}
```

NOTE: Because redirects require an absolute URL, it is best if you always use
relative URLs. To do so. Create a URL object from the current request, then
create a new URL, with the relative path, and pass the base URL in as the second
argument.

```ts
export const action: ActionFunction = async ({ request, params }) => {
  const url = new URL(request.url)
  // redirect to parent route relative to current url
  return redirect(new URL('..', url).toString())
}
```
