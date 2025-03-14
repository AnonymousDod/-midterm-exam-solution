// task-manager/task-manager/src/services/taskService.js

const tasks = [];

function addTask(task) {
    tasks.push(task);
}

function viewTasks() {
    return tasks;
}

function updateTask(id, updatedTask) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

module.exports = {
    addTask,
    viewTasks,
    updateTask,
    deleteTask
};