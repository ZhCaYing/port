import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Breadcrumb, Icon } from 'antd';
import Addshow from './Addshow';
import Showlb from './Showlb';
import XGshow from './XGshow';
import Addyh from './Addyh';
import YHlb from './YHlb';
import XGYH from './XGYH';
import AdOrder from './AdOrder';
import XGOrder from './XGOrder';
import Orderlb from './Orderlb';
class Rigth extends React.Component {
    constructor () {
        super();
        this.state={
            rtops: []
        }
    }
    componentDidMount() {
        let stt=this.props.location.pathname.split('/').splice(1);
        this.setState({
            rtops: stt
        })
    }
    componentDidUpdate(pve, bol) {
        let str=this.props.location.pathname;
        if (str!==pve.location.pathname) {
            let str1=str.split('/').splice(1);
            this.setState({
                rtops: str1
            })
        }
    }
    render() {
        const { Content }=Layout;
        let { rtops }=this.state;
        return (<>
            <Layout style={ { padding: '0 24px 24px' } }>
                <Breadcrumb style={ { padding: "10px", marginBottom: '20px', marginTop: "10px", lineHeight: "20px", backgroundColor: "#fff" } }>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    { rtops.map(ele => {
                        return (
                            <Breadcrumb.Item key={ ele }>{ ele }</Breadcrumb.Item>
                        )
                    }) }
                </Breadcrumb>
                <Content
                    style={ {
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    } }>
                    <Switch>
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/showlb" } component={ Showlb } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/xgshow" } component={ XGshow } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/addyh" } component={ Addyh } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/addshow" } component={ Addshow } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/adorder" } component={ AdOrder } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/yhlb" } component={ YHlb } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/xgyh" } component={ XGYH } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/xgorder" } component={ XGOrder } />
                        <Route path={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ]+"/orderlb" } component={ Orderlb } />
                        <Redirect from={ "/"+rtops[ 0 ]+'/'+rtops[ 1 ] } to={ `/${rtops[ 0 ]}/${rtops[ 1 ]}/showlb` } exact />
                    </Switch>
                </Content>
            </Layout>
        </>)
    }
}
Rigth=withRouter(Rigth);
export default Rigth;