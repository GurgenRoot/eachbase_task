import React, {useState} from "react";

import {Field, reduxForm, reset} from "redux-form";

import {MaxValueValidate, Required, RequiredValue} from "../../validateComponent/ValidateComponent";
import './editInput.scss';


const MaxLength = MaxValueValidate(60);
export const EditInput = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name='editedTask'
                    validate={[Required,MaxLength,RequiredValue]}
                    component={EditInputComponent}
                    {...props}
                />
            </form>
        </div>
    )

}

export const afterSubmit = (result, dispatch) => dispatch(reset('edit-input'));

export const EditInputForm= reduxForm({
    form: 'edit-input',
    onSubmitSuccess: afterSubmit,
})(EditInput);


export const EditInputComponent = ({input,meta,task}) => {
    const [value, setValue] = useState(task)
    return(
        <div className='edit-input-container'>
            <div className='edit-input-container_wrapper'>
                <input className='edit-input-container_input my-anime' placeholder="Edit the task" {...input} value={value}
                       onChange={(e) => setValue(e.target.value)}/>
                <button  className='edit-input-container_btn my-anime'>Add</button>
            </div>
        </div>
    )
}