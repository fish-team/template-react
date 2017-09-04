import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Perf from 'react-addons-perf'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './containers/home/index'
import App from './containers/app/app'
import About from './containers/about/about'
import Todo from './containers/todo/index'

if(process.env.NODE_ENV === 'dev') {
  window.Perf = Perf;
}
render((
  <Todo />
  // <Provider>
  // <Router>
  //   <div>
  //   <Route  exact path="/" component={ App}/>
  //   {/* <Route path="/home" component={ Home}/>
  //   <Route path="/about" component={ About}/> */}
  //   </div>
  // </Router>
  // </Provider>
), document.getElementById('root'))
