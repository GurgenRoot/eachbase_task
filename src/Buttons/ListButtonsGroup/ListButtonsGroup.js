import React from 'react';

import {EditButton} from '../EditButton';
import {DeleteButton} from '../DeleteButton';
import {GoBackButton} from '../GoBackButton';

import '../../index.scss';

import {deleteTaskThunk} from '../../store/createTaskReducer';

export const ListButtonsGroup = ({task, editInputToggle, setEditInputToggle, setEditInputItemId, editInputItemId}) => (
  <div className='btn-group-animate'>
    <div className='ovh bor'>
      {
        !editInputToggle && editInputItemId === task.id
          ? <GoBackButton setEditInputToggle={setEditInputToggle} editInputToggle={editInputToggle}/>
          : <EditButton
            task={task}
            editInputToggle={editInputToggle}
            setEditInputToggle={setEditInputToggle}
            setEditInputItemId={setEditInputItemId}
            editInputItemId={editInputItemId}
          />
      }
      <DeleteButton deleteTaskThunk={deleteTaskThunk} taskId={task.id}/>
    </div>
  </div>
);
