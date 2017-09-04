import React, { Component } from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router-dom'
import PureRenderMixin  from 'react-addons-pure-render-mixin'
class App extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
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