import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Calculadora from './components/Calculatorjuve/Calculatorjuve'
import Notes2 from './components/Notes'
import Error404 from './components/Error/404'

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/About" component={About} exact />
      <Route path="/Contact" component={Contact} exatc />
      <Route path="/Calculadora" component={Calculadora} exatc />
      <Route path="/notes" component={Notes2} exatc />
      <Route path="/notes/:noteId" component={Notes2} exact />
      <Route component={Error404} />
    </Switch>
  </App>
)

export default AppRoutes
