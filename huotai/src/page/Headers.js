import React from "react";
import { withRouter } from 'react-router-dom';
import { Menu, Layout } from 'antd';
class Headers extends React.Component {
    constructor () {
        super();
        this.state={
            arra: [ '/home' ],
            arr: [ {
                name: "home",
                path: '/home',
                text: '首页',
                icon: 'home',
            }, {
                name: "tonji",
                path: '/tonji',
                text: '统计',
                icon: 'rofile',
            }, {
                name: "tgoods",
                path: '/tgoods',
                text: '退货',
                icon: 'shopping',
            } ]
        }
        this.onChanges=this.onChanges.bind(this);
    }
    onChanges(kk) {
        let { key }=kk;
        this.props.history.push(key);
        this.setState({
            arra: [ key ],
        })
    }
    componentDidMount() {
        let key=this.props.location.pathname;
        this.setState({
            arra: [ key ]
        })
    }
    render() {
        // console.log(this.state.arra);
        let { arr, arra }=this.state;
        const { Header }=Layout;
        return (<>
            <Header
                className="header"
                style={ {
                    borderBottom: "5px solid #1890ff",
                    boxSizing: "border-box",
                    height: "100%"
                } } >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={arra}
                    onSelect={ this.onChanges }
                    selectedKeys={  arra  }
                    style={ { lineHeight: '64px' } }>
                    { arr.map(ele => {
                        return (
                            <Menu.Item
                                key={ ele.path }
                            >
                                { ele.text }
                            </Menu.Item>)
                    }) }
                </Menu>
            </Header>
        </>)
    }
}
export default withRouter(Headers);