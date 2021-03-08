import React from "react";

import {Popconfirm, message, Button} from 'antd';

import {useDispatch} from 'react-redux';

import {deleteTaskThunk} from '../store/createTaskReducer';

export const DeleteButton = ({taskId}) => {
    const dispatch = useDispatch()
    const confirm = () => {
        dispatch(deleteTaskThunk(taskId))
        message.success('The task has been deleted');
    }

    const cancel = (e) => {
        console.log(e);
        message.error('Something went wrong');
    }
    return (
        <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button type="primary" className='btns' danger>
                Delete
            </Button>
        </Popconfirm>
    )
};
