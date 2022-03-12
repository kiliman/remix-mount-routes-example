import {
  ActionFunction,
  Form,
  json,
  Link,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix'
import { posts } from '~/data/posts'

export const loader: LoaderFunction = async ({ params }) => {
  const post = posts.find(post => post.slug === params.slug)
  return json(post)
}

export const action: ActionFunction = async ({ request, params }) => {
  const url = new URL(request.url)
  // redirect to parent route relative to current url
  return redirect(new URL('..', url).toString())
}

export default function EditPost() {
  const post = useLoaderData()
  return (
    <div>
      <Form
        method="post"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'flex-start',
        }}
      >
        <label>
          Title: <input type="text" name="title" defaultValue={post.title} />
        </label>
        <label>
          Slug: <input type="text" name="slug" defaultValue={post.slug} />
        </label>
        <div>
          <label>Content</label>
          <textarea name="content" defaultValue={post.content}></textarea>
        </div>
        <button>Update Post</button>
      </Form>
      <div style={{ marginTop: '1rem' }}>
        <Link to="..">Back to Posts</Link>
      </div>
    </div>
  )
}
