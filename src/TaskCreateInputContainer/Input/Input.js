import React from "react";

import {Col} from 'antd';

import './input.scss';

export const Input = ({input,meta}) => {
    const errorTrue = meta.error && meta.touched
    return(
        <Col className='input-container ovh'>
            <div className={errorTrue && 'error-text'}>{errorTrue ? meta.error : null}</div>
            <div className='input-container_wrapper'>
                <input {...input} type="text" className='input-container_input' placeholder="Enter Your new task"/>
                <button type='primary' className='input-container_btn'>ADD</button>
            </div>
        </Col>
    )
};
