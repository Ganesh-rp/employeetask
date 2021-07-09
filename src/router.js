import React from 'react';
import { Router, Route, Switch, useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './pages/login';
import EmployeeList from './pages/employeelist';
import CommonHeader from './components/Header';


const { Content } = Layout;


const Routes = () => {
    const history = useHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Layout>
                    <CommonHeader history={history} />
                    <Content>
                        <Route path="/dashboard" component={ EmployeeList} />
                    </Content>
                </Layout>
            </Switch>
        </Router>
    )
}

export default Routes;

