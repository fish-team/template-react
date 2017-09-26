import React, {Component} from 'react'
import {Form,Button,Input,Icon,message} from 'antd'
import createHistory from 'history/createHashHistory'
import './login.scss'


const history = createHistory();
const FormItem = Form.Item;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
class Login extends Component {
    handleSubmit = (e)=> {
        e.preventDefault()
        this.props.form.validateFields((err,values) => {
            if(!err) {
                if(values.userName=== 'youyu' && values.passWord === '9188') {
                    history.push('/manager')
                } else {
                    message.info('用户名或密码错误')
                    return
                }
            }
        })
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    render() {
        const {getFieldDecorator,getFieldsError,getFieldError,isFieldTouched} = this.props.form

        const userNameError = isFieldTouched('userName') && getFieldError('userName')
        const passWordError = isFieldTouched('passWrod') && getFieldError('passWord')
        return (
            <div className="login-page">
                <div className="form-wrap">
                    <p>商务信用卡管理</p>
                    <Form className="form-login" onSubmit={this.handleSubmit}>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                           {
                                getFieldDecorator('userName', {
                                    rules: [{required: true, message: '请输入用户名'}]
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="Username" />
                                )
                           }
                        </FormItem>

                        <FormItem
                           validateStatus={passWordError ? 'error' : ''}
                           help = {passWordError || ''}
                        >
                            {
                                getFieldDecorator('passWord', {
                                    rules: [{required: true, message: '请输入密码'}]
                                })(
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={hasErrors(getFieldsError())}
                                className="form-btn"
                            > 
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}


export default Form.create()(Login)