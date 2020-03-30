import React from "react";
import { Button, Pagination, Checkbox, ConfigProvider, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN'
const marginTop={
    marginTop: "20px"
}
const text='你确定删除吗? 删除后不能修复';
const text1='是否要修改内容?';
const text2='确认修改?';
function Table(props) {
    // console.log(props.location.pathname);
    let Show=false;
    let Yhok=false;
    let Order=false;
    if (props.location.pathname==="/home/show/showlb") {
        // console.log("/home/show/showlb");
        Show=true;
    } else {
        Show=false;
    }
    if (props.location.pathname==="/home/uesr/yhlb") {
        Yhok=true;
        // console.log('/home/uesr/yhlb');
    } else {
        Yhok=false;
    }

    if (props.location.pathname==="/home/Order/orderlb") {
        // console.log("/home/Order/orderlb");
        Order=true;
    } else {
        Order=false;
    }




    let { datas, }=props;
    let { data, total, num, checkedall }=datas;
    // let okl=data.map(ele => {
    //     console.log(ele);
    // })

    return (<>
        {/* 商品 */ }
        { Show? (<div style={ marginTop }>
            <table>
                <thead>
                    <tr>
                        <th className="thback tdiw">
                            <Checkbox
                                onChange={ props.onChangeall }
                                checked={ checkedall } />
                        </th>
                        <th className="thback tdiw">#</th>
                        <th className="thback tdiw">商品名称</th>
                        <th className="thback tdiw">
                            <span>分类</span>
                        </th>
                        <th className="thback tdiw">价格（原价）</th>
                        <th className="thback tdiw">价格（现价）</th>
                        <th className="thback tdiw">库存</th>
                        <th className="thback tdiw">
                            <span>状态</span>
                        </th>
                        <th className="thback tdiw">
                            <span>添加时间</span>
                        </th>
                        <th className="thback tdiw">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, idx) => {
                            // console.log(ele);
                            return (
                                <tr key={ idx }>
                                    <td className="tdiw">
                                        <Checkbox
                                            onChange={ props.onChanges.bind(null, ele.id) }
                                            checked={ ele.checkedi } />
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.id }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.minzi }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.types }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.prcie }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.prcie }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.prices }
                                    </td>
                                    <td className="tdiw">
                                        上线
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.teim:''||Yhok? ele.teim:''||Order? ele.teim:'' }

                                    </td>
                                    <td className="tdiw">
                                        <Popconfirm
                                            placement="left"
                                            title={ text1 }
                                            onConfirm={ props.Xgshow.bind(null, ele.id, idx) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icona"
                                                type="primary"
                                                icon="edit"
                                                size={ "large" } />
                                        </Popconfirm>
                                        <Popconfirm
                                            placement="topRight"
                                            title={ text }
                                            onConfirm={ props.confirm.bind(null, ele.id) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icondele"
                                                type="danger"
                                                icon="delete"
                                                size={ "large" } />
                                        </Popconfirm>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="rigth marginRight marginTop">
                <ConfigProvider locale={ zhCN }>
                    <Pagination
                        pageSizeOptions={ [ '10', '20', '30', '40' ] }
                        pageSize={ num }
                        showQuickJumper
                        defaultCurrent={ 1 }
                        total={ total }
                        onChange={ props.onChangefenye } />
                </ConfigProvider>
            </div>
        </div>):null
        }
        {/* 用户列表 *//*
         id: 59
        name: "陈子杰"
        paw: "undefined"
        qianm: ""
        zhiye: ""
        pinfen: ""
        sex: "jm"
        tiem: "2019-11-242"
        citoy: ""
        email: "undefined"
        sheri: "1234"
        biezhu: "狗仔"
        phone: "1234321234"
         */  }
        { Yhok? (<div style={ marginTop }>
            <table>
                <thead>
                    <tr>
                        <th className="thback tdiw">
                            <Checkbox
                                onChange={ props.onChangeall }
                                checked={ checkedall } />
                        </th>
                        <th className="thback tdiw">#</th>
                        <th className="thback tdiw">用户名</th>
                        <th className="thback tdiw">密码</th>
                        <th className="thback tdiw">
                            <span>性别</span>
                        </th>
                        <th className="thback tdiw">职业</th>
                        <th className="thback tdiw">联系号码</th>
                        <th className="thback tdiw">
                            <span>邮箱</span>
                        </th>
                        <th className="thback tdiw">
                            <span>添加时间</span>
                        </th>
                        <th className="thback tdiw">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, idx) => {
                            // console.log(ele);
                            return (
                                <tr key={ idx }>
                                    <td className="tdiw">
                                        <Checkbox
                                            onChange={ props.onChanges.bind(null, ele.id) }
                                            checked={ ele.checkedi } />
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.id }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.name }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.paw }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.sex }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.zhiye }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.phone }
                                    </td>
                                    <td className="tdiw">
                                        { ele.email }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.tiem }
                                    </td>
                                    <td className="tdiw">
                                        <Popconfirm
                                            placement="left"
                                            title={ text1 }
                                            onConfirm={ props.Xgshow.bind(null, ele.id, idx) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icona"
                                                type="primary"
                                                icon="edit"
                                                size={ "large" } />
                                        </Popconfirm>
                                        <Popconfirm
                                            placement="topRight"
                                            title={ text }
                                            onConfirm={ props.confirm.bind(null, ele.id) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icondele"
                                                type="danger"
                                                icon="delete"
                                                size={ "large" } />
                                        </Popconfirm>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="rigth marginRight marginTop">
                <ConfigProvider locale={ zhCN }>
                    <Pagination
                        pageSizeOptions={ [ '10', '20', '30', '40' ] }
                        pageSize={ num }
                        showQuickJumper
                        defaultCurrent={ 1 }
                        total={ total }
                        onChange={ props.onChangefenye } />
                </ConfigProvider>
            </div>
        </div>):null
        }
        {/*订单列表 */ }
        { Order? (<div style={ marginTop }>
            <table>
                <thead>
                    <tr>
                        <th className="thback tdiw">
                            <Checkbox
                                onChange={ props.onChangeall }
                                checked={ checkedall } />
                        </th>
                        <th className="thback tdiw">#</th>

                        <th className="thback tdiw">商品名称</th>
                        <th className="thback tdiw">订单用户</th>
                        <th className="thback tdiw">
                            <span>分类</span>
                        </th>
                        <th className="thback tdiw">价格（原价）</th>
                        <th className="thback tdiw">价格（现价）</th>
                        <th className="thback tdiw">购买数量</th>
                        <th className="thback tdiw">
                            <span>状态</span>
                        </th>
                        <th className="thback tdiw">
                            <span>下单时间</span>
                        </th>
                        <th className="thback tdiw">
                            <span>发货时间</span>
                        </th>
                        <th className="thback tdiw">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, idx) => {
                            console.log( ele.textok);
                            console.log(ele.textok2);
                            return (
                                <tr key={ idx }>
                                    <td className="tdiw">
                                        <Checkbox
                                            onChange={ props.onChanges.bind(null, ele.id) }
                                            checked={ ele.checkedi } />
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.id }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.name }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.orderuse }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.types }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.prcie }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.prcies }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.num }

                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.upto }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.upteim }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { ele.xgteim }
                                    </td>
                                    <td className="tdiw">
                                        <Popconfirm
                                            placement="left"
                                            title={ ele.textok? text1:null||ele.textok2? text2:null }
                                            onConfirm={ props.Xgshow.bind(null, ele.id, idx) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icona"
                                                type="primary"
                                                icon="edit"
                                                size={ "large" } />
                                        </Popconfirm>
                                        <Popconfirm
                                            placement="topRight"
                                            title={ text }
                                            onConfirm={ props.confirm.bind(null, ele.id) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icondele"
                                                type="danger"
                                                icon="delete"
                                                size={ "large" } />
                                        </Popconfirm>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="rigth marginRight marginTop">
                <ConfigProvider locale={ zhCN }>
                    <Pagination
                        pageSizeOptions={ [ '10', '20', '30', '40' ] }
                        pageSize={ num }
                        showQuickJumper
                        defaultCurrent={ 1 }
                        total={ total }
                        onChange={ props.onChangefenye } />
                </ConfigProvider>
            </div>
        </div>):null
        }





        {/* <div style={ marginTop }>
            <table>
                <thead>
                    <tr>
                        <th className="thback tdiw">
                            <Checkbox
                                onChange={ props.onChangeall }
                                checked={ checkedall } />
                        </th>
                        <th className="thback tdiw">#</th>
                        <th className="thback tdiw">商品名称</th>
                        <th className="thback tdiw">
                            <span>分类</span>
                        </th>
                        <th className="thback tdiw">价格（原价）</th>
                        <th className="thback tdiw">价格（现价）</th>
                        <th className="thback tdiw">库存</th>
                        <th className="thback tdiw">
                            <span>状态</span>
                        </th>
                        <th className="thback tdiw">
                            <span>添加时间</span>
                        </th>
                        <th className="thback tdiw">修改时间</th>
                        <th className="thback tdiw">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, idx) => {
                            // console.log(ele);
                            return (
                                <tr key={ idx }>
                                    <td className="tdiw">
                                        <Checkbox
                                            onChange={ props.onChanges.bind(null, ele.id) }
                                            checked={ ele.checkedi } />
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.id:''||Yhok? ele.id:''||Order? ele.id:'' }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.minzi:''||Yhok? ele.name:''||Order? ele.name:'' }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.types:''||Yhok? ele.sex:''||Order? ele.types:'' }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.prcie:''||Yhok? ele.prcie:''||Order? ele.prcie:'' }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.prcie:''||Yhok? ele.prcie:''||Order? ele.prcie:'' }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.prices:''||Yhok? ele.prices:''||Order? ele.prices:'' }
                                    </td>

                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.kucun:''||Yhok? ele.kucun:''||Order? ele.kucun:'' }
                                       
                                    </td>
                                    <td className="tdiw">
                                        {
                                            ele.outs? '上线':null||ele.outs? '上线':null||ele.outs? '上线':null
                                        }
                                    </td>
                                    <td className="tdiw"
                                        style={ ele.condd? { backgroundColor: "rgba(47, 161, 255, 0.2)", color: "#000" }:null }
                                        contentEditable={ ele.condd }
                                        suppressContentEditableWarning={ ele.condd }>
                                        { Show? ele.teim:''||Yhok? ele.teim:''||Order? ele.teim:'' }
                                       
                                    </td>
                                    <td className="tdiw">
                                        <Popconfirm
                                            placement="left"
                                            title={ text1 }
                                            onConfirm={ props.Xgshow.bind(null, ele.id, idx) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icona"
                                                type="primary"
                                                icon="edit"
                                                size={ "large" } />
                                        </Popconfirm>
                                        <Popconfirm
                                            placement="topRight"
                                            title={ text }
                                            onConfirm={ props.confirm.bind(null, ele.id) }
                                            okText="确认"
                                            cancelText="取消">
                                            <Button
                                                className="icondele"
                                                type="danger"
                                                icon="delete"
                                                size={ "large" } />
                                        </Popconfirm>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="rigth marginRight marginTop">
                <ConfigProvider locale={ zhCN }>
                    <Pagination
                        pageSizeOptions={ [ '10', '20', '30', '40' ] }
                        pageSize={ num }
                        showQuickJumper
                        defaultCurrent={ 1 }
                        total={ total }
                        onChange={ props.onChangefenye } />
                </ConfigProvider>
            </div>
        </div> */}
    </>)
}
Table=withRouter(Table);
export default Table;