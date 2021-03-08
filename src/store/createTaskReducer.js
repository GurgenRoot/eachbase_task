import {aboutTask} from "../DAL/dal";
const CREATE_TASK = 'create-task/reducer/CREATE_TASK';

const initialState = {
    tasks: [
        {
            id: '-MX547848532dts4',
            day: '10',
            time: '3:00',
            task: 'Example' ,
            editedTask: null,
            completed: {
                taskCompleteDay: '20' ,
                taskCompleteTime: '1:12'
            }
        }
    ]
}

export const CreateTaskReducer = (state= initialState, action)=> {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                tasks: action.payload
            }
        default:
            return state
    }
}

export const createTaskAC = (payload) => ({type: CREATE_TASK,payload })

export const createTaskThunk = (task,day,time)=> {
    return async (dispatch) => {
        const response = await aboutTask.postTask(task,day,time)
        const reserveDB = await aboutTask.reserveDB(task,day,time)
        if (response.status === 200 ) {
            dispatch(getTasksThunk())
        }
    }
}

export const getTasksThunk =  ()=> {
    return async (dispatch) => {
        const response = await aboutTask.getTask()
        if (response.data) {
            const key = Object.keys(response.data).map(key => {
                return {
                    ...response.data[key],
                    id : key,
                }
            })
            if (response.status === 200) {
                dispatch(createTaskAC(key))
            }
        }
        if (!response.data) {
        }
    }
}

export const deleteTaskThunk = (id) => {
    return async (dispatch) => {
        const response = await aboutTask.deleteTask(id)
        if (response.status === 200) {
            dispatch(getTasksThunk())
        }
    }
}

export const deleteAllTaskThunk = () => {
    return async (dispatch) => {
        const response = await aboutTask.deleteAllTask()
        if (response.status === 200) {
            dispatch(getTasksThunk())
        }
    }
}

export const completeTaskThunk = (id,completed = true) => {
    return async (dispatch) => {
        const response = await aboutTask.completeTask(id,completed)
        if (response.status === 200) {
            dispatch(getTasksThunk())
        }
    }
}

export const postEditedTaskThunk = (taskId,editedTask) => {
    return async (dispatch) => {
        const response = await aboutTask.editedTask(taskId,editedTask)
            if (response.status === 200) {
                dispatch(getTasksThunk())
            }


    }
}

export const taskCountThunk = (task) => {
    return async ()=> {
        const response = await aboutTask.TasksCount(task)

    }
}
