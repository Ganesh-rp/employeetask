import React from 'react';
import { Spin } from 'antd';



export const Spinner = ({show = false}) => {
    return (
        <>
          {show ? <Spin size="large" tip="Loading..." /> : ""}  
        </>

    )
}