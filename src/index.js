import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
// routes
import AppRoutes from './routes'
// redux store
import configureStore from "./shared/redux/configureStore"
import { Provider } from 'react-redux'

// configure redux store
const store = configureStore(window.initialState)
// DOM
const rootElement = document.getElementById('root')
// App Wrapper
const renderApp = Component => {
  render (
    <Provider store={store}>
      <Router>
        <Component/>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

// rendering our app

renderApp(AppRoutes)
