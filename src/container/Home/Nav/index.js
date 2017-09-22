import React, { Component } from 'react'
import { Layout,Menu,Icon } from 'antd'
import {Link} from 'react-router-dom'

import menuItems  from '../../../util/menu'
import './nav.scss'

let selKey = ['bank']
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selKey: ['bank']
        }
    }
    componentWillMount() {
        this.getHash()
    }
    componentWillUpdate() {
        this.getHash()
    }
    getHash = () => {
        const hash = location.hash.replace(/#/,'');
        hash && (selKey = [hash]);
    }
    render() {
        return(
            <Menu
                selectedKeys={selKey}
                theme = "dark"
                mode = "inline"
                
            >   
                {
                    menuItems.map((item, index) => {
                        if(item.children) {
                            return (<SubMenu key={item.url}
                                        title={<span><Icon type={item.type}/> <span>{item.name}</span></span>}
                                    >
                                   {
                                       item.children.map((subItem, i) => {
                                           return (
                                               <MenuItem key={subItem.url}><Link to={subItem.url}><span>{subItem.name}</span></Link></MenuItem>
                                           )
                                       })
                                   }
                                </SubMenu>)
                        } else {
                            return (
                                <MenuItem key={item.url}>
                                    <Link to={item.url}>
                                    <Icon type={item.type}/>
                                    <span>{item.name}</span>
                                    </Link>
                                </MenuItem>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
}

export default Nav