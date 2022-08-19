import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/About" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
