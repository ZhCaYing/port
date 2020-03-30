import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, DatePicker, Select, InputNumber, Button, Icon } from 'antd';
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
function Forms(props) {
    console.log(props);

    let { tites, data }=props.datas;
    const { Option }=Select;
    const { form }=props;
    const { getFieldDecorator }=form;
    return (<>
        <div
            onClick={ props.defuc }
            className={ data.Tdsuccess? "tohidebox bolcks":"tohidebox hide" }>
            {
                data.Tdsuccess? <Icon type="check-circle" theme="twoTone" style={ { color: "green" } } />:<Icon type="exclamation-circle" theme="twoTone" style={ { color: "red" } } />
            }
            <span>{ data.Tdsuccess? "添加成功":"添加失败" }</span>
        </div>
        <Form { ...formItemLayout }>
            <Form.Item
                label={ tites.nameS }
                validateStatus="error">
                { getFieldDecorator('name')(
                    //2、getFieldDecorator 的使用方法，这种写法真的很蛋疼
                    <Input placeholder="请输入用户名" id="error" />
                ) }
            </Form.Item>
            <Form.Item
                label={ tites.IDS }
                validateStatus="error"
                help="ID已存在">
                <Input placeholder="ID不得与已有的重复" id="error" />
            </Form.Item>
            <Form.Item
                label={ tites.YHname }
                validateStatus="error">
                <Input placeholder="输入用户名" id="error" />
            </Form.Item>
            <Form.Item label={ tites.FLname } hasFeedback>
                <Select defaultValue="1">
                    <Option value="1">电子</Option>
                    <Option value="2">家电</Option>
                    <Option value="3">手机</Option>
                    <Option value="4">书籍</Option>
                    <Option value="5">居家</Option>
                    <Option value="6">服装</Option>
                    <Option value="7">饮食</Option>
                </Select>
            </Form.Item>

            <Form.Item label={ tites.numS } hasFeedback validateStatus="success">
                <InputNumber style={ { width: '100%' } } />
            </Form.Item>

            <Form.Item label={ tites.URLS } hasFeedback validateStatus="success">
                <Input allowClear placeholder="复制图片路径  只可以复制一张" />
            </Form.Item>
            <Form.Item label={ tites.Price } hasFeedback validateStatus="success">
                <Input placeholder="输入单价" id="success" />
            </Form.Item>

            <Form.Item label={ tites.Prices } hasFeedback validateStatus="warning">
                <Input placeholder="输入总价" id="warning2" />
            </Form.Item>

            <Form.Item label={ tites.DATEs } hasFeedback validateStatus="success">
                <DatePicker style={ { width: '100%' } } />
            </Form.Item>

            <Button
                type="primary"
                style={ { marginLeft: "235px" } }
                size={ "large" }>
                提交
            </Button>
        </Form>
    </>)
}
Forms=Form.create()(Forms);
Forms=withRouter(Forms);
export default Forms;