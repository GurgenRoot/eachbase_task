import React from "react";

import './Header.scss';

export const Header = ({tasks}) => {
    const task = tasks.map(task => {
        if (task.completed) {
            return Object.keys(task.completed)
        }
    });
    const completedTasksCount = task.filter(completedTask => completedTask !== undefined)
    return(
        <div>
            <div className='wrapper'>
                Completed - <div className='letter'>0</div>
                            <div className='letter'>{tasks.length}</div>
                            <div className='letter'> /</div>
                            <div className='letter'>0</div>
                            <div className='letter'>{completedTasksCount.length} </div>
            </div>
        </div>
    )
};
