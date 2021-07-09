import React from 'react';
import { Form, Input  } from 'antd';


const FormInputConfirmPassword = ({label, name, message}) => {
    return (
        <Form.Item
        name={name}
        label={label}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: message,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    )
}

export default FormInputConfirmPassword;