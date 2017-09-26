import React from 'react'
import {Layout} from 'antd'
import {Route} from 'react-router-dom'
// manager
import Muser from '../../Manager/User'
import Mbank from '../../Manager/Bank'
import Mchannel from '../../Manager/Channel'
import Monline from '../../Manager/Online'
import Mcode from '../../Manager/Code'


const {Content} = Layout

export default function(){
    return (
        <Content>
            <Route path="/manager/user" component={Muser}/>
            <Route path="/manager/bank" component={Mbank}/>
            <Route path="/manager/channel" component={Mchannel}/>
            <Route path="/manager/online" component={Monline}/>
            <Route path="/manager/code" component={Mcode}/>
        </Content>
    )
}
    