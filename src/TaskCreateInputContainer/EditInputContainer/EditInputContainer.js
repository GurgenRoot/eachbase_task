import React from 'react';

import {EditInputForm} from './EditInput';

import {postEditedTaskThunk} from '../../store/createTaskReducer';

export const EditInputContainer = ({task, editInputToggle, setEditInputToggle}) => (
  <>
    <EditInputForm onSubmit={(e) => {
      postEditedTaskThunk(task.id, e.editedTask);
      setEditInputToggle(!editInputToggle);
    }}

                   task={task.editedTask
                     ? Object.values(task.editedTask).map(task => task.editedTask)[Object.keys(task.editedTask).length - 1]
                     : task.task
                   }
    />
  </>
);
