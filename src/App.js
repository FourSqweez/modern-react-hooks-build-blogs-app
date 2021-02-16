import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Creat from './Creat'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Creat} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
