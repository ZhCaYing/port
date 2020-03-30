import React from 'react';
import { Form, Input, DatePicker, Select, InputNumber, Button, Icon } from 'antd';
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
// moment.locale('en-gb');
import Axios from 'axios';
import qs from 'qs';
// import Forms from '../conpmse/Forms';
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
            h1: '添加订单',
            tites: {
                nameS: '商品名',
                IDS: '商品名ID',
                YHname: '购买用户',
                FLname: '分类',
                numS: '数量',
                URLS: '封面',
                Price: '单价',
                Prices: '总价',
                DATEs: '日期',
            },
            data: {
                name: '',
                nameok: false,
                nameoks: false,
                id: '',
                idok: false,
                idoks: false,
                idoksa: false,
                FL: '电子',
                FLok: false,
                FLoks: false,
                num: '',
                numok: false,
                numoks: false,
                numoksa: false,
                url: '',
                urlok: false,
                urloks: false,
                price: '',
                priceok: false,
                priceoks: false,
                prices: '',
                pricesok: false,
                pricesoks: false,
                datetiem: '',
                datetiemok: false,
                datetiemoks: false,
                YHname: '',
                success: false,
                Tdsuccess: false
            },
        }
    }
    // 分类值
    FLs=(e) => {
        let { data }=this.state;
        let res=e.target.children[ 0 ].innerText;
        data.FL=res;
        this.setState({
            data
        })
    }
    // 提交按钮
    Td=async () => {
        let { data }=this.state;
        // console.log(this.refs);
        data.name=this.refs.name.state.value
        data.YHname=this.refs.YHname.state.value
        data.id=this.refs.ID.state.value
        data.num=this.refs.num.inputNumberRef.input.value
        data.url=this.refs.url.state.value
        data.price=this.refs.price.state.value
        data.prices=this.refs.prices.state.value
        data.datetiem=this.refs.DATe.picker.input.value
        this.setState({
            data
        })
        if (!data.name) {
            data.nameoks=true;
            this.setState({
                data
            })
        } else {
            data.nameoks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.id) {
            data.idoks=true;
            this.setState({
                data
            })
        } else {
            data.idoks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.FL) {
            data.FLoks=true;
            this.setState({
                data
            })
        } else {
            data.FLoks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.num) {
            data.numoks=true;
            this.setState({
                data
            })
        } else {
            data.numoks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.url) {
            // console.log('url');
            data.urloks=true;
            this.setState({
                data
            })
        } else {
            data.urloks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.price) {
            data.FLoks=true;
            this.setState({
                data
            })
        } else {
            data.FLoks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.price) {
            data.priceoks=true
            this.setState({
                data
            })
        } else {
            data.priceoks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.prices) {
            data.pricesoks=true;
            this.setState({
                data
            })
        } else {
            data.pricesoks=false;
            this.setState({
                data
            })
        }
        // 
        if (!data.datetiem) {
            data.datetiemoks=true;
            this.setState({
                data
            })
        } else {
            data.datetiemoks=false;
            this.setState({
                data
            })
        }
        // 
        let { name, id, FL, url, price, prices, datetiem, num }=this.state.data
        console.log(name, id, FL, url, price, prices, datetiem, num);
        if (name&&id&&FL&&url&&price&&prices&&datetiem&&num) {

            data.numoks=false;
            let datas=await Axios.post(`http://localhost:1911/goods`, (qs.stringify({ query: { name, id, FL, url, price, prices, datetiem, num } })));
            if (datas.data.code) {
                data.Tdsuccess=true;
                this.setState({
                    data
                })
                this.tiemhide()
            } else {
                data.Tdsuccess=false;
                this.setState({
                    data
                })
                this.tiemhide()
            }
        }
    }
    tiemhide=() => {
        let item;
        let { Tdsuccess }=this.state.data
        let { data }=this.state
        if (Tdsuccess) {
            clearTimeout(item)
        }
        this.refs.name.input.value='';
        this.refs.name.state.value='';
        this.refs.ID.input.value='';
        this.refs.ID.state.value='';
        this.refs.YHname.input.value='';
        this.refs.YHname.state.value='';
        this.refs.num.inputNumberRef.input.value='';
        this.refs.num.inputNumberRef.state.value='';
        this.refs.url.input.value='';
        this.refs.url.state.value='';
        this.refs.price.input.value='';
        this.refs.price.state.value='';
        this.refs.prices.input.value='';
        this.refs.prices.state.value='';
        this.refs.DATe.picker.input.value='';
        item=setTimeout(() => {
            data.Tdsuccess=false;
            data.name='';
            data.id='';
            data.num='';
            data.url='';
            data.price='';
            data.prices='';
            data.datetiem='';
            data.YHname="";
            this.setState({
                data
            })
        }, 2000);
    }
    // 关闭提示
    defuc=() => {
        let { data }=this.state
        data.Tdsuccess=false;
        this.setState({
            data
        })
    }
    render() {
        const { Option }=Select;
        let { tites, data }=this.state
        return (<>
            <div>
                <h1 style={ { margin: "0px 0px 20px 230px", fontSize: "28px" } }> { this.state.h1 }</h1>
                <div
                    onClick={ this.defuc }
                    className={ data.Tdsuccess? "tohidebox bolcks":"tohidebox hide" }>
                    {
                        data.Tdsuccess? <Icon type="check-circle" theme="twoTone" style={ { color: "green" } } />:<Icon type="exclamation-circle" theme="twoTone" style={ { color: "red" } } />
                    }
                    <span>{ data.Tdsuccess? "添加成功":"添加失败" }</span>
                </div>
                <Form { ...formItemLayout }>
                    <Form.Item
                        help={ data.nameoks? "名字不能为空":'' }
                        validateStatus={ data.nameok? 'success':"error" }
                        label={ tites.nameS }
                    >
                        <Input placeholder="请输入用户名" ref="name" />
                    </Form.Item>

                    <Form.Item
                        validateStatus={ data.idok? 'success':"error" }
                        help={ data.success? "ID已存在":''||data.idoks? "ID不能为空":''||data.idoksa? "ID应为数字":'' }
                        label={ tites.IDS }>
                        <Input placeholder="ID不得与已有的重复" ref="ID" />
                    </Form.Item>
                    <Form.Item
                        help={ data.nameoks? "用户名字不能为空":'' }
                        validateStatus={ data.nameok? 'success':"error" }
                        label={ tites.YHname }
                        validateStatus={ data.nameok? 'success':"error" }>
                        <Input placeholder="输入用户名" id="error" ref="YHname" />
                    </Form.Item>
                    <Form.Item label={ tites.FLname } hasFeedback onBlur={ this.FLs } ref="FL">
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

                    <Form.Item label={ tites.numS } hasFeedback help={ data.numoks? "数量不能为空":''||data.numoksa? "请输入数字!":"" }
                        hasFeedback validateStatus={ data.numok? 'success':"error" }>
                        <InputNumber style={ { width: '100%' } } ref="num" />
                    </Form.Item>

                    <Form.Item label={ tites.URLS } hasFeedback help={ data.urloks? "封面不能为空":'' }
                        hasFeedback validateStatus={ data.urlok? 'success':"error" }>
                        <Input allowClear placeholder="复制图片路径  只可以复制一张" ref="url" />
                    </Form.Item>

                    <Form.Item label={ tites.Price } hasFeedback help={ data.priceoks? "单价不能为空":'' }
                        hasFeedback validateStatus={ data.priceok? 'success':"error" }>
                        <Input placeholder="输入单价" id="success" ref="price" />
                    </Form.Item>

                    <Form.Item label={ tites.Prices } hasFeedback help={ data.pricesoks? "总价不能为空":'' }
                        hasFeedback validateStatus={ data.pricesok? 'success':"error" }>
                        <Input placeholder="输入总价" id="warning2" ref="prices" />
                    </Form.Item>

                    <Form.Item
                        onBlur={ this.onBlurdatetiem }
                        label={ tites.DATEs } hasFeedback help={ data.datetiemoks? "日期不能为空":'' }
                        hasFeedback validateStatus={ data.datetiemok? 'success':"error" }>
                        <DatePicker style={ { width: '100%' } } ref="DATe" />
                    </Form.Item>

                    <Button
                        onClick={ this.Td }
                        type="primary"
                        style={ { marginLeft: "235px" } }
                        size={ "large" }>
                        提交
                     </Button>
                </Form>
            </div>
        </>)
    }
}
export default Contents;