import React from 'react';
import { Form, Input, DatePicker, Select, InputNumber, Button, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/en-gb';
import Axios from 'axios';
import qs from 'qs';
moment.locale('en-gb');
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
            h1: '添加商品',
            nameValerr: 'error',
            nameValusee: 'success',
            nameValwarn: '',
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
                success: false,
                Tdsuccess: false
            }
        }
    }


    // 获取商品name值
    onBlura=(ev) => {
        // console.log(ev.target.value);
        let { data }=this.state
        data.name=ev.target.value
        if (data.name) {
            data.nameok=true;
            data.nameoks=false;
            this.setState({
                data
            })
        } else {
            data.nameok=false;
            this.setState({
                data
            })
        }
    }
    // 获取ID值
    onBlurID=async (ev) => {
        // console.log(ev.target.value);
        let { data }=this.state
        data.id=ev.target.value
        var re=/^[0-9]+.?[0-9]*/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/ 
        // console.log(re.test(data.id));
        if (data.id) {
            if (re.test(data.id)) {
                data.idok=true;
                data.idoksa=false;
                let ree=await Axios.get(`http://localhost:1911/goods/${data.id}`)
                // console.log(ree);
                if (!ree.data.code) {
                    data.success=false;
                    data.idoks=false;
                    this.setState({
                        data
                    })
                } else {
                    data.idok=false;
                    data.success=true
                    data.idoks=false;
                    this.setState({
                        data
                    })
                }
            } else {
                data.idoksa=true;
                this.setState({
                    data
                })
            }
        } else {
            data.idok=false;
            this.setState({
                data
            })
        }

    }
    // 获取num值
    onBlurnum=(ev) => {
        // console.log(ev.target.value);
        let { data }=this.state
        data.num=ev.target.value
        // console.log(data.num);
        if (!data.num) {
            data.numoksa=true;
            this.setState({
                data
            })
        } else {
            data.numoksa=false;
            if (data.num) {
                data.numok=true;
                data.numoks=false;
                this.setState({
                    data
                })
            } else {
                data.numok=false;
                this.setState({
                    data
                })
            }
        }
    }
    // 获取URL值
    onBlurUrl=(ev) => {
        // console.log(ev.target.value);
        let { data }=this.state
        data.url=ev.target.value
        if (data.url) {
            data.urlok=true;
            data.urloks=false;
            this.setState({
                data
            })
        } else {
            data.urlok=false;
            this.setState({
                data
            })
        }
    }
    // 获取单价值
    onBlurprice=(ev) => {
        // console.log(ev.target.value);
        let { data }=this.state
        data.price=ev.target.value
        if (data.price) {
            data.priceok=true;
            data.priceoks=false;
            this.setState({
                data
            })
        } else {
            data.priceok=false;
            this.setState({
                data
            })
        }
    }
    // 获取总价值
    onBlurprices=(ev) => {
        // console.log(ev.target.value);
        let { data }=this.state
        data.prices=ev.target.value
        if (data.prices) {
            data.pricesok=true;
            data.pricesoks=false;
            this.setState({
                data
            })
        } else {
            data.pricesok=false;
            this.setState({
                data
            })
        }
    }
    // 获取时间值;
    onBlurdatetiem=(ev) => {
        // console.log(ev.target.value);
        let { data }=this.state
        data.datetiem=ev.target.value
        if (data.datetiem) {
            data.datetiemok=true;
            data.datetiemoks=false;
            this.setState({
                data
            })
        } else {
            data.datetiemok=false;
            this.setState({
                data
            })
        }
    }
    FLs=(ev) => {
        // 分类值
        // console.log(ev.target.children[0].innerText);
        let { data }=this.state
        data.FL=ev.target.children[ 0 ].innerText
        if (data.FL) {
            data.FLok=true;
            this.setState({
                data
            })
        } else {
            data.FLok=false;
            this.setState({
                data
            })
        }
    }
    Td=async () => {
        // 提交按钮
        // console.log(this.state);
        let { data }=this.state;
        let { name, id, FL, url, price, prices, datetiem, num }=data;
        if (!name) {
            // console.log("name");
            data.nameoks=true
            this.setState({
                data
            })
        }
        if (!id) {
            // console.log('id');
            data.idoks=true
            this.setState({
                data
            })
        }
        if (!FL) {
            // console.log('FL');
            data.FLoks=true
            this.setState({
                data
            })
        }
        if (!num) {
            // console.log('num');
            data.numoks=true
            this.setState({
                data
            })
        }

        if (!url) {
            // console.log('url');
            data.urloks=true
            this.setState({
                data
            })
        }
        if (!price) {
            // console.log('price');
            data.FLoks=true
            this.setState({
                data
            })
        }
        if (!price) {
            // console.log('prices');
            data.priceoks=true
            this.setState({
                data
            })
        }
        if (!prices) {
            // console.log('prices');
            data.pricesoks=true
            this.setState({
                data
            })
        }
        if (!datetiem) {
            // console.log('datetiem');
            data.datetiemoks=true
            this.setState({
                data
            })
        }
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
        this.refs.names.input.value='';
        this.refs.names.state.value='';
        this.refs.idsa.input.value='';
        this.refs.idsa.state.value='';
        this.refs.num.inputNumberRef.input.value='';
        this.refs.num.inputNumberRef.state.value='';
        this.refs.url.input.value='';
        this.refs.url.state.value='';
        this.refs.price.input.value='';
        this.refs.price.state.value='';
        this.refs.prices.input.value='';
        this.refs.prices.state.value='';
        this.refs.date.picker.input.value='';
        item=setTimeout(() => {
            data.Tdsuccess=false;
            data.name='';
            data.id='';
            data.num='';
            data.url='';
            data.price='';
            data.prices='';
            data.datetiem='';
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
        const { Option }=Select
        let { size, h1, data }=this.state;
        return (<>
            <div>
                <h1 style={ { margin: "0px 0px 20px 230px", fontSize: "28px" } }>
                    {
                        h1
                    }
                </h1>
                <div
                    onClick={ this.defuc }
                    className={ data.Tdsuccess? "tohidebox bolcks":"tohidebox hide" }>
                    <span>{ data.Tdsuccess? "添加成功":"添加失败" }</span>
                </div>
                <Form { ...formItemLayout } >
                    <Form.Item
                        label="商品名"
                        help={ data.nameoks? "名字不能为空":'' }
                        validateStatus={ data.nameok? 'success':"error" }>
                        <Input placeholder="请输入用户名" id="error" onBlur={ this.onBlura } ref='names' />
                    </Form.Item>

                    <Form.Item
                        label="商品名ID"
                        validateStatus={ data.idok? 'success':"error" }
                        help={ data.success? "ID已存在":''||data.idoks? "ID不能为空":''||data.idoksa? "ID应为数字":'' }>
                        <Input placeholder="ID不得与已有的重复"
                            //  id="error" 
                            ref="idsa" onBlur={ this.onBlurID } />
                    </Form.Item>

                    <Form.Item label="分类" hasFeedback onBlur={ this.FLs }>
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

                    <Form.Item label="数量"
                        help={ data.numoks? "数量不能为空":''||data.numoksa? "请输入数字!":"" }
                        hasFeedback validateStatus={ data.numok? 'success':"error" }>
                        <InputNumber style={ { width: '100%' } } ref="num" onBlur={ this.onBlurnum } />
                    </Form.Item>

                    <Form.Item label="图片URL"
                        help={ data.urloks? "封面不能为空":'' }
                        hasFeedback validateStatus={ data.urlok? 'success':"error" }>
                        <Input allowClear placeholder="复制图片路径  只可以复制一张" ref="url" onBlur={ this.onBlurUrl } />
                    </Form.Item>

                    <Form.Item label="单价"
                        help={ data.priceoks? "单价不能为空":'' }
                        hasFeedback validateStatus={ data.priceok? 'success':"error" }>
                        <Input placeholder="输入单价" id="success" ref="price" onBlur={ this.onBlurprice } />
                    </Form.Item>

                    <Form.Item label="总价"
                        help={ data.pricesoks? "总价不能为空":'' }
                        hasFeedback validateStatus={ data.pricesok? 'success':"error" }>
                        <Input placeholder="输入总价" id="warning2" ref="prices" onBlur={ this.onBlurprices } />
                    </Form.Item>

                    <ConfigProvider locale={ zhCN }>
                        <Form.Item label="日期"
                            help={ data.datetiemoks? "日期不能为空":'' }
                            hasFeedback validateStatus={ data.datetiemok? 'success':"error" }>
                            <DatePicker style={ { width: '100%' } }  onBlur={ this.onBlurdatetiem } ref="date" />
                        </Form.Item>
                    </ConfigProvider>
                    <Button
                        onClick={ this.Td }
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