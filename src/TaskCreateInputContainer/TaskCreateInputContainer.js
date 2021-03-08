import React from "react";

import {useDispatch} from 'react-redux';

import {TaskCreateInputForm} from "./TaskCreateInput";
import {createTaskThunk} from "../store/createTaskReducer";

export const TaskCreateInputContainer = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <TaskCreateInputForm
                onSubmit = {(InputValue) => dispatch(createTaskThunk(InputValue.task))}
            />
        </div>
    )
};
