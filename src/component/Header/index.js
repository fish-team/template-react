import React from 'react'
import {Layout,Avatar} from 'antd'

const {Header} = Layout
export default function({userIcon,onClick}) {
    return(
        <Header style={{ backgroundColor: '#fff' }}>
            <div onClick={onClick}>
            <Avatar size= 'large' style={{float: 'right', marginTop: '10px', cursor: 'pointer'}} src={userIcon} />
            </div>
        </Header>
    )
}
