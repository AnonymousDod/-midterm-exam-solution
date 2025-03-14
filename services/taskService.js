const tasks = [];

const addTask = (name, description) => {
    const id = tasks.length + 1;
    const task = { id, name, description };
    tasks.push(task);
};

const getTasks = () => {
    return tasks;
};

const updateTask = (id, name, description) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = name;
        task.description = description;
        return true;
    }
    return false;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = { addTask, getTasks, updateTask, deleteTask };