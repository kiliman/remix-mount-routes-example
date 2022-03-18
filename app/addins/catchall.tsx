import { json, LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async ({ params }) => {
  return json({ path: params['*'] })
}

export default function Catchall() {
  const data = useLoaderData()
  return (
    <>
      <h1>Catchall</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
