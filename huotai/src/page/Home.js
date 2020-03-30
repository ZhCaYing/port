import React from 'react';
import { Layout } from 'antd';
import Lfets from './pages/Lfets';
import Rigths from './pages/Rigths';
import '../css/tbody.min.css';
class Home extends React.Component {
    render() {
        const { Sider }=Layout;
        return (<>
            <Layout>
                <Layout>
                    <Sider width={ 200 } style={ { background: '#fff' } }>
                        <Lfets />
                    </Sider>
                    <Rigths />
                </Layout>
            </Layout>
        </>)
    }
}
export default Home;