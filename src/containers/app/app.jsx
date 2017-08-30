import React, { Component } from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/home">home</Link>
                <Link to="/about">about</Link> 
            </div>
        )
    }
}

export default App