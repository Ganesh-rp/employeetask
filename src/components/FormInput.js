import React from 'react';
import { Form, Input } from 'antd';


const FormInput = ({ label, name, message, type, typeMessage }) => {

    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                {
                    type: type,
                    message: typeMessage,
                  },
                {
                    required: true,
                    message: message,
                },
            ]}
        >
            <Input />
        </Form.Item>
    )
}

export default FormInput;