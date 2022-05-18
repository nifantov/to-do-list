import UI from "./UI"
import { format, toDate, isToday, isThisWeek, subDays } from "date-fns";

export default class Label {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    create() {
        const container = document.getElementById("label-list");
        
        const label = document.createElement("div");
        label.classList.add("label");

        const labelName = document.createElement("p");
        labelName.classList.add("label-name");
        labelName.textContent = this.name;

        const removeBtn = document.createElement("div");
        removeBtn.classList.add("remove-button");
        removeBtn.onclick = () => {
            console.log("remove")
            label.remove()
            UI.deleteLabel(this.name);
        };

        label.appendChild(labelName);
        label.appendChild(removeBtn);
        container.appendChild(label);
    }

    createDefault() {
        const container = document.getElementById("label-list-default");
        
        const label = document.createElement("div");
        label.classList.add("label");

        const labelName = document.createElement("p");
        labelName.classList.add("label-name");
        labelName.textContent = this.name;
        label.appendChild(labelName);
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
    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    addTask (newTask) {
        this.tasks.push(newTask);
    }

    deleteTask(deleteTask) {
        this.tasks = this.tasks.filter(task => task.name !== deleteTask);
    }

    findTask(taskName) {
        return this.tasks.find(task => task.name === taskName)
    }



    openLabel() {
        UI.clearTaskList();
        UI.loadTaskList(this.name);
    }



    getTodayTasks() {
        return this.tasks.filter(task => {
            const date = new Date(task.dateFormat())
            return isToday(toDate(date))
        })
    }
    
    getWeekTasks() {
        return this.tasks.filter(task => {
            const date = new Date(task.dateFormat())
            return isThisWeek(subDays(toDate(date), 1));
        })
    }
    
    getSomedayTasks() {
        return this.tasks.filter(task => {
            return task.date === "no date";
        })
    }
    
}