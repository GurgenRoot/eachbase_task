import React, {useState} from 'react';

import {Divider, List, Pagination} from 'antd';
import {useSelector} from 'react-redux';

import ListButtonsGroup from '../Buttons/ListButtonsGroup';
import EditInputContainer from '../TaskCreateInputContainer/EditInputContainer';
import TaskItem from './TaskItem';

import {completeTaskThunk, deleteTaskThunk} from '../store/createTaskReducer';

import './ListComponent.scss';

export const ListsComponent = () => {

  const [editInputToggle, setEditInputToggle] = useState(true);
  const [editInputItemId, setEditInputItemId] = useState('');
  const tasks = useSelector(store => store.CreateTaskReducer.tasks);

  return (
    <>
      <Divider orientation="left">Tasks</Divider>
      <List
        size="small"
        header={<div>Armenia, Yerevan</div>}
        dataSource={tasks}
        renderItem={
          item =>
            <List.Item className='list-animate ovh'>
              {
                !editInputToggle && editInputItemId === item.id
                  ? <EditInputContainer
                    task={item}
                    editInputToggle={editInputToggle}
                    setEditInputToggle={setEditInputToggle}
                  />
                  : <TaskItem task={item}
                              editInputToggle={editInputToggle}
                              editInputItemId={editInputItemId}
                              completeTaskThunk={completeTaskThunk}
                  />
              }
              <ListButtonsGroup
                task={item}
                deleteTaskThunk={deleteTaskThunk}
                editInputToggle={editInputToggle}
                setEditInputToggle={setEditInputToggle}
                editInputItemId={editInputItemId}
                setEditInputItemId={setEditInputItemId}
              />
            </List.Item>}
      />
    </>
  );
};