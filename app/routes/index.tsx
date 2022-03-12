import { Link } from 'remix'

export default function Index() {
  return (
    <div>
      <h1>Remix app mounted at /myapp</h1>
      <p>
        This routes are defined in `/app/routes` but is served up as `/myapp/`
      </p>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="posts/">Posts</Link>
        </li>
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
