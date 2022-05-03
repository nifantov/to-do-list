import Catalog from "./Catalog";
import UI from "./UI";

export default class Task {
    constructor(name, label, date = "no date") {
        this.name = name;
        this.label = label;
        this.date = date;
        

    }

    //Methods
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }
     
    create() {
        const container = document.getElementById("task-list");

        const task = document.createElement("div");
        task.classList.add("task");
        
        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        checkbox.onclick = () => checkbox.classList.toggle("close");
        

        const taskName = document.createElement("p");
        taskName.classList.add("task-name");
        taskName.textContent = this.name;

        const input = document.createElement("input");
        input.classList.add("input-rename");

        const accept = document.createElement("div");
        accept.classList.add("accept");

        const editBtn = document.createElement("div");
        editBtn.classList.add("edit-button");
        editBtn.onclick = () => {
            taskName.classList.add("notactive");
            editBtn.classList.add("notactive");
            checkbox.after(input);
            input.after(accept);
            accept.onclick = () => {
                this.setName(input.value);
                input.remove();
                accept.remove();
                taskName.classList.remove("notactive");
                editBtn.classList.remove("notactive");
                taskName.textContent = (input.value);
            }
        }

        const removeBtn = document.createElement("div");
        removeBtn.classList.add("remove-button");
        removeBtn.onclick = () => {
            task.remove()
            UI.deleteTask(this.label, this.name);
        };

        const inputDate = document.createElement("input");
        inputDate.type = "date";
        inputDate.addEventListener("change", () => {
            this.setDate(inputDate.value);
            date.textContent = this.date;
            inputDate.remove();
            date.classList.remove("notactive");

        })

        const date = document.createElement("div");
        date.classList.add("date");
        date.textContent = this.date;
        date.onclick = () => {
            date.classList.add("notactive");
            task.appendChild(inputDate);
        }

        


        container.appendChild(task);
        task.appendChild(checkbox);
        task.appendChild(taskName);
        task.appendChild(editBtn);
        task.appendChild(removeBtn);
        task.appendChild(date);
    }


}