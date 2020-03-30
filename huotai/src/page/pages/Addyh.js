import React from 'react';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Button } from 'antd';

const formItemLayout={
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};
class Contents extends React.Component {
    constructor () {
        super();
        this.state={
            size: 'large',
            h1: '添加用户',
        }
    }
    render() {
        const { Option }=Select
        let {  size, h1 }=this.state;
        return (<>
            <div>
                <h1 style={ { margin: "0px 0px 20px 230px", fontSize: "28px" } }>
                    {
                        h1
                    }
                </h1>
                <Form { ...formItemLayout }>
                    <Form.Item
                        label="用户名"
                        validateStatus="error"
                        help="用户名不正确"
                    >
                        <Input placeholder="请输入用户名" id="error" />
                    </Form.Item>

                    <Form.Item label="别名" validateStatus="warning">
                        <Input placeholder="请输入别名" id="warning" />
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback validateStatus="warning">
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>

                    <Form.Item label="确认密码" hasFeedback validateStatus="error">
                        <Input.Password allowClear placeholder="请确认密码" />
                    </Form.Item>

                    <Form.Item
                        label="邮箱"
                        hasFeedback
                        validateStatus="error"
                        help="输入的邮箱格式不正确"
                    >
                        <Input placeholder="邮箱" id="error2" />
                    </Form.Item>

                    <Form.Item label="性别" hasFeedback validateStatus="error">
                        <Select defaultValue="1">
                            <Option value="1">男</Option>
                            <Option value="2">女</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="日期" hasFeedback validateStatus="success">
                        <DatePicker style={ { width: '100%' } } />
                    </Form.Item>

                    <Form.Item label="设置时间" hasFeedback validateStatus="warning">
                        <TimePicker style={ { width: '100%' } } />
                    </Form.Item>

                    <Button
                        type="primary"
                        style={ { marginLeft: "235px" } }
                        size={ size }>
                        提交
                    </Button>

                </Form>
            </div>
        </>)
    }
}
export default Contents;