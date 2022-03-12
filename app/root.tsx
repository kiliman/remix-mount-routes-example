import type { MetaFunction } from 'remix'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'

export const meta: MetaFunction = () => {
  return { title: 'Remix Mount Routes Example' }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <Link to="/myapp">Click here to go to My Remix App on /myapp</Link>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
