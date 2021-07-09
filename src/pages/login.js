import React, { useEffect } from 'react';
import { Form, Card, message } from 'antd';
import FormInput from '../components/FormInput';
import FormInputPassword from '../components/FormInputPassword';
import FormButton from '../components/Button';
import { setItem, isLoggedIn } from '../util/helpers';
import  user  from '../assets/json/user.json';
import '../scss/login.scss';




const Login = (props) => {

    useEffect(() => {
      const user = isLoggedIn();
      if(user) {
          props.history.push('/dashboard')
      }
    }, [props.history])

    const onFinish = async (values) => {
            if(values.email ===  user.username &&  values.password === user.password) {
                message.success('User logged in successfully');
                setItem('user', {email: values.email});
                props.history.push('/dashboard');
            } else {
                message.error("invalid credentials");
            }
    };

    const onFinishFailed = (errorInfo) => {
    };

    return (
        <div className="site-card-border-less-wrapper login-bg login-card">
            <Card title="Login" bordered={false}>
                <Form name="basic" labelCol={{ span: 24 }} initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <FormInput label="Email" name="email" type="email" typeMessage="The input is not valid E-mail!" message="Please input your E-mail!" />
                    <FormInputPassword label="Password" name="password" message="Please input your password!" />
                    <FormButton classes="login-btn" span="24">Submit</FormButton>
                </Form>
            </Card>
        </div>
    );
};

export default Login;





