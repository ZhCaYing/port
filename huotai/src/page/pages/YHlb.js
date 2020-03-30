import React from 'react';
import Tablea from '../conpmse/Table';
import { Button, Icon, Popconfirm } from 'antd';
import Axios from 'axios';
import qs from 'qs';
const fontSize28={
    fontSize: "28px",
    lineHeight: "50px",
    textAlign: "center"
}
const marginTop={
    marginTop: "20px"
}
const marginLeft={
    marginLeft: "20px",
}
const text='你确定删除吗? 删除后不能修复';
// const text1='点击后即可修改内容,    再次点击即可保存';
class YHlb extends React.Component {
    constructor () {
        super();
        this.state={
            total: 0,
            data: [],
            num: 10,
            page: 1,
            checkedall: false,
            iok: true
        }
    }
    // 获取数据,更新数据;
    getdata=async () => {
        // console.log(4567);
        let rees=await Axios.post("http://localhost:1911/usesr/soname", (qs.stringify({ query: { page: this.state.page, num: this.state.num } })))
        // console.log(rees);
        let ree=rees.data.list.map(ele => {
            // console.log(...ele);
            return (ele={
                ...ele,
                checkedi: false,
                condd: false
            });
        })
        this.setState({
            data: ree,
            total: rees.data.total
        })
    }
    // 分页;
    onChangefenye=async (pageNumber) => {
        let { num }=this.state
        let page=pageNumber;
        let ree=await Axios.post("http://localhost:1911/usesr/soname", (qs.stringify({ query: { page, num } })))
        let rdd=ree.data.list.map(ele => {
            ele.condd=false;
            return ele
        })
        this.setState({
            data: rdd,
            total: ree.data.total,
            checkedall: false,
        })
    }
    ondele=async (e) => {
        // 删除当前页面选中的数据;
        let ree=this.state.data.filter(itme => itme.checkedi);
        // console.log(ree);
        if (ree.length) {
            let id=ree.map(ele => ele.id)
            let data=await Axios.post(`http://localhost:1911/usesr/dele/`, (qs.stringify({ qurey: { id } })));
            // console.log(data);
            if (data.data.code) {
                this.getdata()
                this.state.checkedall=false;
                alert("删除成功");
            } else {
                alert("删除失败");
            }
        }
    }
    confirm=async (e) => {
        //小删除功能
        let id=e;
        console.log(id);
        let ree=await Axios.post(`http://localhost:1911/usesr/dele/`, (qs.stringify({ qurey: { id } })));;
        // console.log(ree);
        if (ree.data.code) {
            this.getdata()
            alert("删除成功");
        } else {
            alert("删除失败");
        }
    }
    Xgshow=(id, idx) => {
        // 修改功能;
        let { iok }=this.state
        // 第一次点击;
        if (iok) {
            let datas=this.state.data.map(ele => {
                // console.log(ele);
                if (ele.id===id) {
                    ele.condd=!ele.condd;
                }
                return ele
            });
            this.setState({
                data: datas,
                iok: false
            })
        }
        // 第二次点击;
        if (!iok) {
            let datas=this.state.data.map(ele => {
                // console.log(ele);
                if (ele.id===id) {
                    ele.condd=!ele.condd
                }
                return ele
            });
            // console.log(123);
            this.setState({
                data: datas,
                iok: true
            })
        }
    }
    // 跳转到添加商品页;
    onTd=() => {
        this.props.history.push('/home/uesr/addyh')
    }
    // 单选;
    onChanges=(idx) => {
        // console.log(idx);
        // this.state.data[idx].checkedi=!this.state.data[idx].checkedi;
        let data=this.state.data.map(ele => {
            if (ele.id===idx) {
                ele.checkedi=!ele.checkedi;
            }
            return ele;
        })
        this.setState({
            data,
            checkedall: data.every(item => item.checkedi)
        })
    }
    // 全选;
    onChangeall=() => {
        // console.log(`checked = ${e.target.checked}`);
        let checkedall=!this.state.checkedall;
        let data=this.state.data.map(ele => {
            ele.checkedi=checkedall
            return ele
        })
        // console.log(data);
        this.setState({
            checkedall,
            data
        })
    }
    // 初始化时获取数据
    componentDidMount() {
        this.getdata()
    }
    render() {
        // console.log(this.state);
        return (<>
            <div><h1 style={ fontSize28 }>用户列表</h1></div>
            <div>
                <Button type="primary" size={ 'large' } onClick={ this.onTd }>
                    <Icon type='plus-circle' />
                    <span>添加</span>
                </Button>
                <Popconfirm
                    placement="bottomLeft"
                    title={ text }
                    onConfirm={ this.ondele }
                    okText="确认"
                    cancelText="取消">
                    <Button type="danger" style={ marginLeft } size={ 'large' } >
                        <Icon type="delete" />
                        <span>删除</span>
                    </Button>
                </Popconfirm>
            </div>
            <Tablea
                onChangefenye={ this.onChangefenye }
                ondele={ this.ondele }
                confirm={ this.confirm }
                Xgshow={ this.Xgshow }
                onTd={ this.onTd }
                onChanges={ this.onChanges }
                onChangeall={ this.onChangeall }
                datas={ this.state } />
        </>)
    }
}
export default YHlb;