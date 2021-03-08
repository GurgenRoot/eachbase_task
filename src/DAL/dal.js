import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-list-db-5fe9b.firebaseio.com/'
})

export const aboutTask = {
    TasksCount(task) {
        const day = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        return instance.post('tasksGroup/tasks.json',{task,day,time}).then(response => response)
    },

    postTask(task,day=new Date().toLocaleDateString(),time=new Date().toLocaleTimeString()) {
        return instance.post('tasksGroup/tasks.json',{task,day,time}).then(response => response)
    },
    getTask() {
        return instance.get('tasksGroup/tasks.json').then(response => response)
    },

    deleteTask(id) {
        return instance.delete(`tasksGroup/tasks/${id}.json`).then(response => response)
    },

    completeTask(taskId) {
        const taskCompleteDay = new Date().toLocaleDateString()
        const taskCompleteTime = new Date().toLocaleTimeString()
        return instance.post(`tasksGroup/tasks/${taskId}/completed.json`,{taskCompleteDay,taskCompleteTime}).then(response => response)
    },

    editedTask(taskId,editedTask) {
        return instance.post(`tasksGroup/tasks/${taskId}/editedTask.json`,{editedTask}).then(response => response)
    },

    reserveDB(task,day=new Date().toLocaleDateString(),time=new Date().toLocaleTimeString()) {
        return instance.post('reserveDB/tasks.json',{task,day,time}).then(response => response)
    },

}
