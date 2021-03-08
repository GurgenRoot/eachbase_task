import React from 'react';

import {Popconfirm, message, Popover} from 'antd';
import CheckCircleOutlined from '@ant-design/icons/lib/icons/CheckCircleOutlined';

export const TaskCompletedConfirm = ({completeTaskThunk, task}) => {

    const confirm = () => {
        if (!task.completed) {
            completeTaskThunk(task.id);
            message.success('Completed!');
        }
    };

    const cancel = (e) => {
        console.log(e);
        message.error('Cancel');
    };
    return (
      <>
          {!task.completed ?
            <Popconfirm
              title='Are you complete this task?'
              onConfirm={confirm}
              onCancel={cancel}
              okText='Yes'
              cancelText="No"
            >
                <CheckCircleOutlined className='icon'/>
            </Popconfirm>
            : <Popover content='Completed!' title="The task id done">
                <CheckCircleOutlined className='icon success-color'/>
            </Popover>

          }
      </>
    );
};
