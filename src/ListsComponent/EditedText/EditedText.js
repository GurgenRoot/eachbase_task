import React from 'react';

export const EditedText = ({task}) => (
  <span className={task.completed ? 'completed-task' : null}>
            {
              Object.values(task.editedTask)
                .map(task => task.editedTask)[Object.keys(task.editedTask).length - 1]
            }
        </span>
);
