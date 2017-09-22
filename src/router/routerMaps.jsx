import { HashRouter as Router, Route ,Redirect} from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../container/Home'
import Login from '../container/Login'


const USER = "geeksan"
const routes= (
    <Router>
        <div>
            <Route path="/" render={()=> {
                if(USER) {
                    return <Home/>
                } else {
                    return <Login/>
                }
            }}/>
        </div>
    </Router>
)

export default routes