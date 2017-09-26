import React, { Component } from 'react'
import { Layout,Menu,Icon } from 'antd'
import {Link} from 'react-router-dom'

import './nav.scss'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

export default function({menuItems = [],selKey,onClick}) {
    return(
        <Menu
            selectedKeys={selKey}
            theme = "dark"
            mode = "inline"
            onClick = {onClick}
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
    