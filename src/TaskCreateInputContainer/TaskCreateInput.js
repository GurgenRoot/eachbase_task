import React from "react";

import {reset, reduxForm, Field} from "redux-form";

import Input from "./Input";

import {MaxValueValidate, Required, RequiredValue} from "../validateComponent/ValidateComponent";

import '../index.scss';

const MaxLength = MaxValueValidate(50);

const TaskCreateInput = (props) => {

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name='task'
                    validate={[Required,MaxLength,RequiredValue]}
                    component={Input}
                    {...props}
                />
            </form>
        </div>
    )
};

export const afterSubmit = (result, dispatch) => dispatch(reset('task-input'));

export const TaskCreateInputForm= reduxForm({
    form: 'task-input',
    onSubmitSuccess: afterSubmit,
})(TaskCreateInput);

