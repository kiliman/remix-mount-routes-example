import { Link } from 'react-router-dom'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { posts } from '~/data/posts'

export const loader: LoaderFunction = async () => {
  return json(posts)
}

export default function Index() {
  const posts = useLoaderData<any>()
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
