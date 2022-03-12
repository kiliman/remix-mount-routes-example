import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { posts } from '~/data/posts'

export const loader: LoaderFunction = async ({ params }) => {
  const post = posts.find(post => post.slug === params.slug)
  return json(post)
}

export default function DisplayPost() {
  const post = useLoaderData()
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Link to="../">Back to Posts</Link>
        <Link to="edit">Edit Post</Link>
      </div>
    </div>
  )
}
