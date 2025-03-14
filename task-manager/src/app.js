console.log("Welcome to the Task Management System");

const taskService = require('./services/taskService');

function main() {
    console.log("Available commands:");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Update Task");
    console.log("4. Delete Task");
    console.log("5. Exit");

    // Here you would implement a way to take user input and call the appropriate taskService functions
};

main();