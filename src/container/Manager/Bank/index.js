import React,{Component}from 'react'
import {Button,Modal,Form,Input,Select,Popconfirm} from 'antd'
import Tables from '../../../component/Tables'
import './bank.scss'

// handle

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 }
  };
// antd 
const FormItem = Form.Item
const Option = Select.Option


// table State
const title = ()=> '银行管理'
class Bank extends Component {
    constructor(props) {
        super(props)
        this.columns = [{
            title: '银行名',
            dataIndex: 'bankname',
            className: 'center'
        },{
            title: '结算方式',
            dataIndex: 'settletype',
            className: 'center'
            
        },{
            title: '税点',
            dataIndex: 'taxrate',
            className: 'center'
            
        },{
            title: '阶梯类型',
            dataIndex: 'steptype',
            className: 'center'
            
        },{
            title: '阶梯规则',
            dataIndex: 'steprule',
            className: 'center'
            
        },{
            title: '操作',
            key: 'action',
            render: (text,record,index)=> (
                <span>
                    <Button type="primary" onClick={(e)=> {this.openEditPanel(record)}}>编辑</Button>
                    <Popconfirm title="是否删除这个用户？" onConfirm={(e) => {this.handleDelateUser(record.key)}}>
                        <Button type="danger" style={{marginLeft: 10}}>删除</Button>
                    </Popconfirm>
                </span>
            ),
            className: 'center'
            
        }]
        this.state = {
            table: {
                loading: false,
                pagination: true,
                size: 'default',
                title,
            },
            // modal
            Mvisible: false,
            Mtitle: '',
            // 当前modal的key
            Mkey: '',

            dataSource: [{
                key: 0,
                bankname: '交通银行',
                settletype: '核卡',
                taxrate: '6%',
                steptype: '阶梯1',
                steprule: '0:100:20;100:-:30'
            },{
                key: 1,
                bankname: '招商银行',
                settletype: '首刷',
                taxrate: '6%',
                steptype: '阶梯2',
                steprule: '0:100:20;100:200:30'
            },{
                key: 2,
                bankname: '工商银行',
                settletype: '首刷',
                taxrate: '6%',
                steptype: '阶梯2',
                steprule: '0:100:20;100:400:30'
            },{
                key: 3,
                bankname: '建设银行',
                settletype: '核卡',
                taxrate: '6%',
                steptype: '阶梯1',
                steprule: '0:100:20;100:-:30'
            }],
            count: 4
        }
    }
    showModal = (title='',key,initData={}) => {
        this.setState({
            Mvisible: true,
            Mtitle: title,
            Mkey: key
        })
        this.setFieldsValue(initData)
    }
    // 删除用户
    handleDelateUser = (key) => {
        const {dataSource} = this.state
        this.setState({
            dataSource: dataSource.filter((item,index) => {
                if(key != item.key) {
                    return item
                }
            })
        })
        
    }
    // 编辑用户
    openEditPanel = (record) => {
        const key = record.key
        this.showModal('编辑',key,record)
    }
    handleEditUser = (values) => {
        const {Mkey,dataSource} = this.state
        const data = []
        dataSource.forEach((item,index) => {
            if(Mkey === item.key) {
                item = {
                    key: item.key,
                    username: values.username,
                    password: values.password,
                    business: values.business
                }
            }
            data.push(item)
            
        })
        this.setState({
            dataSource: data,
            Mvisible: false,
            Mtitle: ''
        })

    }
    // 添加用户
    OpenAddPanel = (e) =>{
        const key = this.state.count
        e.preventDefault()
        this.showModal('添加',key)

    }
    handleAddUser = (values) => {
        const {Mkey,dataSource} = this.state
        const newData = Object.assign({},{key: Mkey},values)
        this.setState({
            dataSource: [...dataSource,newData],
            count: Mkey + 1,
            Mvisible: false,
            Mtitle: ''
        })
    }

    handleOk = () => {
        this.props.form.validateFields((err,values) => {
            const title = this.state.Mtitle
            if(!err) {
                if (title == '添加') {
                    this.handleAddUser(values)
                } else {
                    this.handleEditUser(values)
                }
            }
        })
        
    }
   
    handleCancel = () => {
        this.setState({
            Mvisible: false
        })
    }
    // 设置表单的值
    setFieldsValue = ({username = '',password = '',business= ''}) => {
        this.props.form.setFieldsValue({
            username,
            password,
            business
        })
    }
    render() {
        const {dataSource,Mvisible,Mtitle} = this.state
        const columns = this.columns
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                 <Tables columns={columns} dataSource={dataSource} onClick={this.OpenAddPanel} {...this.state.table}/>
                 <Modal
                    visible={Mvisible}
                    title={Mtitle}
                    onOk={this.handleOk}
                    onCancel = {this.handleCancel}
                 >
                    <Form>
                        <FormItem
                            label="用户名"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('username',{
                                    rules: [{
                                        required: true,
                                        message: '请输入用户名'
                                    }]
                                })(
                                    <Input/>
                                )
                            }
                        </FormItem>
                        <FormItem
                            label="密码"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('password',{
                                    rules: [{
                                        required: true,
                                        message: '请输入密码'
                                    }]
                                })(
                                    <Input />
                                )
                            }
                        </FormItem>
                        <FormItem
                            label="是否商务"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('business',{
                                    rules: [{
                                        required: true,
                                        message: '请选择'
                                    }]
                                })(
                                    <Select>
                                        <Option value="是">是</Option>
                                        <Option value="否">否</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Form>
                 </Modal>
            </div>
        )
    }
}

export default Form.create()(Bank)
