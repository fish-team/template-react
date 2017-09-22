import React, {Component} from  'react'
import {Layout} from 'antd'
import './home.scss'
import Nav from './Nav'
const {Content,Header,Footer,Sider} = Layout
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '明海',

        }
       
    }
    componentDidMount() {

    }
    render() {
        return(
            <Layout className="container">
                <Sider
                    collapsible
                    collapsed = {false}
                    trigger = {null}
                >
                    <div className="sider-user">{`欢迎您，${this.state.user}`}</div>
                    <Nav selKey={['1']} user={this.state.user}/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home