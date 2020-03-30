import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Headers from './Headers';
import Home from './Home';
import Tonji from './Tonji';
import Tuihuo from './Tuihuo';
import 'antd/dist/antd.css';
class GuanLi extends React.Component {
    render() {
        return (<>
            <Headers />
            <Switch>
                <Route path="/home" component={ Home } />
                <Route path="/tonji" component={ Tonji } />
                <Route path="/tgoods" component={ Tuihuo } />
                <Route path="/notfound" render={ () => {
                    return (<h1 style={ { textAlign: "center" } }>你访问的页面不存在</h1>)
                } } />
                <Redirect from="/" to="/home/show/showlb" exact />
                <Redirect to="/notfound" />
            </Switch>
        </>)
    }
}
export default withRouter(GuanLi);