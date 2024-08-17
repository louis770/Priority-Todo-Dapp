const tasks = [];

function createTask(owner, title, priority = "medium") {
    const task = {
        id: owner + "-" + tasks.length,
        owner,
        title,
        priority,
        status: "pending"
    };
    tasks.push(task);
    return "Task created successfully!";
}

function updateTask(id, status) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = status;
        return "Task updated successfully!";
    } else {
        return "Task not found!";
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index > -1) {
        tasks.splice(index, 1);
        return "Task deleted successfully!";
    } else {
        return "Task not found!";
    }
}

function getTasks() {
    return tasks;
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getTasks
};
