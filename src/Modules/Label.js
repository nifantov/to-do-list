import UI from "./UI"

export default class Label {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    create() {
        const container = document.getElementById("label-list");
        const label = document.createElement("button");
        label.classList.add("label");
        label.textContent = this.name;
        container.appendChild(label);
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

    findTask(taskName) {
        return this.tasks.find(task => task.name ===taskName)
    }

    openLabel() {
        UI.clearTaskList();
        UI.loadTaskList(this.name);
        
    }

    
    
    
}