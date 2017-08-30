import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './containers/home/index'
import App from './containers/app/app'
import About from './containers/about/about'

render((
  <Router>
    <div>
    <Route  exact path="/" component={ App}/>
    <Route path="/home" component={ Home}/>
    <Route path="/about" component={ About}/>
    </div>
  </Router>
), document.getElementById('root'))
