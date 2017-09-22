import React from 'react'
import { render } from 'react-dom'
import Perf from 'react-addons-perf'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import routes from './router/routerMaps'
import './asset/scss/normalize.scss'
import './asset/scss/common.scss'
// import store from './redux/store/store'

// store
if(process.env.NODE_ENV === 'dev') {
  window.Perf = Perf;
}
render((
   <div>
     {routes}
   </div>
), document.getElementById('root'))
