import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Input from '../../components/Input/index'
import List from '../../components/List/index'
class Todo extends Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            todos: []
        }
    }
    render() {
        return(
            <div>
                input:
                <Input onSubmit={this.onSubmit.bind(this)} />
                <List todos={this.state.todos} onDelate={this.onDelate.bind(this)} />
            </div>
        )
    }
    componentDidMount() {

    }
    onSubmit(value) {
        let len = this.state.todos.length;
        this.setState({
            todos: this.state.todos.concat({
                id: len,
                text: value
            })
        })
    }
    onDelate(id) {
        this.setState({
            todos: this.state.todos.filter(function(item, index) {
                if(id !== item.id) {
                    return item;
                }
            })
        })
    }
}

export default Todo