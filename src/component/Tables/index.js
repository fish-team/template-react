import React from 'react'
import {Button,Table} from 'antd'

export default function({columns,dataSource,onClick,...rest}) {
    return(
        <div style={{backgroundColor: '#fff', padding: 20}}>
            <Button type="primary" size="large" onClick={onClick}>添加</Button>
            <Table columns={columns} {...rest} dataSource={dataSource} pagination={{showSizeChanger:true,showQuickJumper:true}}/>
        </div>
    )
}