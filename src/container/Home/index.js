import React, {Component} from  'react'
import {Layout} from 'antd'
import './home.scss'
import Nav from '../../component/Nav'
import Header from '../../component/Header'
import Content from './Content'
import createHistory from 'history/createHashHistory'
import Url from 'url'

import menuItems from '../../util/menu'

const history = createHistory()
let selKey = ['']

const {Footer,Sider} = Layout
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '明海',
            userIcon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        }
    }
    componentWillMount() {
        this.getHash()
    }
    componentWillUpdate() {
        // 点击回退按钮导航高亮
        this.getHash()
    }
    getHash = () => {
        const hash = location.hash.replace(/#/,'');
        hash && (selKey = [hash]);
    }
    componentDidMount() {

    }
    handleHeaderClick = () => {
        history.push('/login')
    }
    handleNavClick = ({key}) => {
        // console.log(key)
    }
    render() {
        return(
            <Layout className="container">
                <Sider
                    collapsible
                    collapsed = {false}
                    trigger = {null}
                    className="sider"
                >
                    <div className="sider-user">{`欢迎您，${this.state.user}`}</div>
                    <Nav selKey= {selKey} menuItems = {menuItems} onClick={this.handleNavClick}/>
                </Sider>
                <Layout className="content-wrap">
                    <Header userIcon={this.state.userIcon} onClick={this.handleHeaderClick} />
                    <Content />
                    <Footer className="footer">Business Manager ©2017 Created by YouYu</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home