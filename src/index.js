import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import AppRoutes from './routes';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

render ( 
  <Router>
    <AppRoutes/>
  </Router>,
  document.getElementById('root')
)