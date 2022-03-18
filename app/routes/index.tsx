import { Link } from 'remix'

export default function Index() {
  return (
    <div>
      <h1>Remix app mounted at /myapp</h1>
      <p>
        This routes are defined in `/app/routes` but is served up as `/myapp/`
      </p>
      <pre
        dangerouslySetInnerHTML={{
          __html: `routes: defineRoutes => {
  // mountRoutes(basePath, routesDir)
  // routesDir is relative to ./app folder
  const baseRoutes = mountRoutes('/myapp', 'routes')
  const testRoutes = mountRoutes('/test', 'addins/test')
  const customRoutes = defineRoutes(route => {
    route('/some/path/*', 'addins/catchall.tsx')
  })
  const routes = {
    ...baseRoutes,
    ...testRoutes,
    ...customRoutes,
  }
  return routes
},`,
        }}
      ></pre>
      <h2>Remix App Routes</h2>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="posts/">Posts</Link>
        </li>
      </ul>
      <h2>Remix Add In Routes</h2>
      <ul>
        <li>
          <Link to="/test">Test link</Link>
        </li>
        <li>
          <Link to="/some/path/that-doesnt-exist">Catch all route</Link>
        </li>
      </ul>
      <h2>Remix Repo Links</h2>
      <ul>
        <li>
          <a href="https://github.com/kiliman/remix-mount-routes">
            remix-mount-routes repo
          </a>
        </li>
        <li>
          <a href="https://github.com/kiliman/remix-mount-routes-example">
            This sample repo
          </a>
        </li>
      </ul>
    </div>
  )
}
