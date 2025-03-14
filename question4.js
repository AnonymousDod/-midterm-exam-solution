const express = require('express');
const taskService = require('./services/taskService');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Add a new task
app.post('/tasks', (req, res) => {
    const { name, description } = req.body;
    taskService.addTask(name, description);
    res.status(201).send({ message: 'Task added successfully' });
});

// View all tasks
app.get('/tasks', (req, res) => {
    const tasks = taskService.getTasks();
    res.status(200).send(tasks);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    const result = taskService.updateTask(id, name, description);
    if (result) {
        res.status(200).send({ message: 'Task updated successfully' });
    } else {
        res.status(404).send({ message: 'Task not found' });
    }
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = taskService.deleteTask(id);
    if (result) {
        res.status(200).send({ message: 'Task deleted successfully' });
    } else {
        res.status(404).send({ message: 'Task not found' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});