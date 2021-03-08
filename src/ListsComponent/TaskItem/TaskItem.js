import React from 'react';

import {Col} from 'antd';

import {TaskCompletedConfirm} from '../../Buttons/TaskConpletedConfirm.js';
import TaskItemText from '../TaskItemText';
import ListItemInfo from '../ListItemInfo';

import './TaskItem.scss';

export const TaskItem = ({task, editInputToggle, editInputItemId, completeTaskThunk}) => (
  <Col span={12} className='ovh'>
    <div className={editInputToggle && editInputItemId === task.id ? 'my-edit_anime task-item' : 'task-item'}>
      <TaskCompletedConfirm completeTaskThunk={completeTaskThunk} task={task}/>
      <ListItemInfo task={task}/>
      <TaskItemText task={task}/>
    </div>
  </Col>
);
