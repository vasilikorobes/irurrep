class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description, priority, dueDate) {
        const newTask = {
            id: this.tasks.length + 1,
            description: description,
            complete: false,
            priority: priority,
            dueDate: dueDate
        };
        this.tasks.push(newTask);
        return newTask;
    }

    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.complete = true;
        } else {
            console.error("Task not found");
        }
    }
}

// Usage
const manager = new TaskManager();
manager.addTask("Finish writing report", "high", "2024-06-30");
manager.addTask("Prepare presentation", "medium", "2024-07-15");

console.log(manager.tasks);
// Mark the first task as complete
manager.completeTask(1);
console.log(manager.tasks);
