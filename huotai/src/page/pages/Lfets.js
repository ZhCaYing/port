import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
class Lfets extends React.Component {
    constructor () {
        super();
        this.state={
            lefta: [ "/home/showlb" ],
            kk: [ '/showlb' ],
            lefts: [ {
                title: "商品管理",
                sub: "sub1",
                path: "/show",
                icon: 'shop',
                data: [ {
                    name: '商品列表',
                    path: '/showlb'
                }, {
                    name: '修改商品',
                    path: '/xgshow'
                }, {
                    name: '添加商品',
                    path: '/addshow'
                }, ]
            }, {
                title: "用户管理",
                sub: "sub2",
                path: "/uesr",
                icon: 'user',
                data: [ {
                    name: '用户列表',
                    path: '/yhlb'
                }, {
                    name: '修改用户',
                    path: '/xgyh'
                }, {
                    name: '添加用户',
                    path: '/addyh'
                }, ]
            }, {
                title: "订单管理",
                sub: "sub3",
                path: "/Order",
                icon: 'pushpin',
                data: [ {
                    name: '订单列表',
                    path: '/orderlb'
                }, {
                    name: '修改订单',
                    path: '/xgorder'
                }, {
                    name: '添加订单',
                    path: '/adorder'
                }, ]
            } ]
        }
        this.onClicks=this.onClicks.bind(this);
    }
    onClicks(path) {
        let { keyPath }=path;
        let key1=keyPath[ 1 ];
        let key2=keyPath[ 0 ];
        this.props.history.push("/home"+key1+key2);
        this.setState({
            lefta: [ "/home"+key1+key2 ],
        })
    }
    componentDidMount() {
        let lefta=this.props.location.pathname;
        if (this.props.location.pathname!==this.props.location.pathname) {
            this.setState({
                lefta: [ "/home"+lefta ],
            })
        }
    }
    render() {
        const { SubMenu }=Menu;
        let { lefts, kk }=this.state;
        return (<>
            <Menu mode="inline"
                theme="dark"
                defaultSelectedKeys={ [ '1' ] }
                defaultOpenKeys={ kk }
                onClick={ this.onClicks }
                style={ { height: '100%', borderRight: 0 } }>
                {
                    lefts.map((item) => {
                        return (
                            <SubMenu
                                key={ item.path }
                                title={
                                    <span>
                                        <Icon type={ item.icon } />
                                        { item.title }
                                    </span>
                                }>
                                {
                                    item.data.map((ele) => {
                                        return (
                                            <Menu.Item
                                                key={ ele.path }>
                                                { ele.name }
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        )
                    })
                }
            </Menu>
        </>)
    }
}
Lfets=withRouter(Lfets);
export default Lfets