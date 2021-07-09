import React from 'react';
import { Layout, Row, Col } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { clearItem } from '../util/helpers';
import '../scss/header.scss'

const { Header } = Layout;


const CommonHeader = (props) => {
    const logOut = () => {
        clearItem();
        props.history.push('/login')
    }
    return (
        <Header>
            <Row>
                <Col span={18} push={6}>
                    <div className="row header">
                        <span className="logout">Logout</span>
                        <span onClick={logOut} className="logout_icon"><LogoutOutlined /></span>
                    </div>
                </Col>
                <Col span={6} pull={18}>
                    <div className="header-title">DashBoard</div>
                </Col>
            </Row>
        </Header>
    )
}

export default CommonHeader;