export default class Label {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    //name methods
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    //tasks methods
    addTask (newTask) {
        this.tasks.push(newTask);
    }

    deleteTask(deleteTask) {
        this.tasks = this.tasks.filter(task => task.name !== deleteTask);
    }

    
}