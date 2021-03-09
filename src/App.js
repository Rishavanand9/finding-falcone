import React from 'react'
import { useSelector } from 'react-redux'
import { Login, Header, Footer, Home, Results } from './components'
import { selectUser } from './features/userSlice'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'

function App() {
  const user = useSelector(selectUser)
  localStorage.setItem('planet', JSON.stringify([]))
  localStorage.setItem('vehicle', JSON.stringify([]))
  localStorage.setItem('time', JSON.stringify(0))

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {!user?.loggedIn ? <Login /> : <Redirect to="/home" />}
          </Route>
          <Route path="/home" exact>
            <Header />
            {user?.loggedIn ? <Home /> : <Redirect to="/" />}
          </Route>
        </Switch>
        <Route path="/result" exact>
          {user?.loggedIn ? <Results /> : <Redirect to="/" />}
        </Route>
      </Router>
      <Footer />
    </div>
  )
}

export default App
