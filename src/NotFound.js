import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page can not be found</p>
      <Link to="/">Back to homepage...</Link>
    </div>
  )
}

export default NotFound
