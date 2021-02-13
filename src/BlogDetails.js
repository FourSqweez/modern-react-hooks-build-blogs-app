import { useParams } from 'react-router'
import useFetch from './useFetch'
import { useHistory } from 'react-router-dom'

const BlogDetails = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  )

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div className="blog-details">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <article>Written by {blog.author}</article>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default BlogDetails
