import React from 'react';

import {Col, Tag} from 'antd';

import './ListItemInfoContent.scss';

export const ListItemInfoContent = ({task}) => {

  const taskCompleteDay = () => {
    if (task.completed) {
      return Object.values(task.completed).map(task => {
        return (
          <div>
            <Col span={10} className='tag-green'><Tag color="green">Completed day</Tag></Col><Col className='tag-green'
                                                                                                  span={10}>{task.taskCompleteDay}</Col>
            <Col span={10} className='tag-green'><Tag color="green">Completed time</Tag></Col><Col className='tag-green'
                                                                                                   span={10}>{task.taskCompleteTime}</Col>
          </div>
        );
      });
    }
  };

  const editedTaskCount = () => {
    if (task.editedTask) {
      return Object.values(task.editedTask).map(task => {
        return (
          <div>
            <Tag color='gold'>Edited Text</Tag><span>{task.editedTask}</span>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className='added-date'>
        <Col span={10} className='tag-blue'><Tag color="blue">Added day</Tag></Col><Col span={10}
                                                                                        className='tag-blue'>{task.day}</Col>
        <Col span={10} className='tag-blue'><Tag color="blue">Added time</Tag></Col><Col span={10}
                                                                                         className='tag-blue'>{task.time}</Col>
      </div>

      {task.completed
        ? taskCompleteDay()
        : null
      }

      {task.editedTask
        ? editedTaskCount()
        : null
      }
    </div>
  );
};
