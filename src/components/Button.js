import React from 'react';
import { Form, Button } from 'antd';


const FormButton = ({ offset, span, children, classes, ...props }) => {
    const onClickEvent = () => {
        if (props?.onClickEvent) {
            props.onClickEvent();
        }
    }
    return (
        <div className={classes}>
            <Form.Item
                wrapperCol={{
                    offset: offset,
                    span: span,
                }}
            >
                <Button type="primary" onClick={onClickEvent} htmlType="submit">
                    {children}
                </Button>
            </Form.Item>
        </div>
    )
}

export default FormButton;