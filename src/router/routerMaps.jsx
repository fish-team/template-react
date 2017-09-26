import { HashRouter as Router, Route ,Redirect,Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../container/Home'
import Login from '../container/Login'


const USER = "geeksan"
const routes= (
    <Router>
        <div>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/:path" component={Home}/>
                <Redirect exact from="/" to="/login"/>
            </Switch>
        </div>
    </Router>
)

export default routes