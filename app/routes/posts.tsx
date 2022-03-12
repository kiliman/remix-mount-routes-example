import { Outlet } from 'remix'

export default function PostsLayout() {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  )
}
