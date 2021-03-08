import React from 'react';

import EditedText from '../EditedText';

export const TaskItemText = ({task}) => (
  <>
    <span>
      {task.editedTask
        ? <EditedText task={task}/>
        : <span className={task.completed ? 'completed-task' : null}>{task.task}</span>
      }
    </span>
  </>
);
