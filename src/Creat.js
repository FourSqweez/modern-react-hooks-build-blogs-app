import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Creat = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    setIsPending(true)
    e.preventDefault()
    const blog = { title, body, author }
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      history.push('/')
    })
  }

  return (
    <>
      <Helmet>
        <title>Create blog</title>
      </Helmet>
      <div className="create">
        <h2>Create New Blogs</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label> Blog author:</label>
          <select
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button>Adding Blog...</button>}
        </form>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </div>
    </>
  )
}

export default Creat
