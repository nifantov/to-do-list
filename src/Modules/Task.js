import Catalog from "./Catalog";
import UI from "./UI";
import format from "date-fns/format";
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

    dateFormat() {
        const day = this.date.split('/')[0]
        const month = this.date.split('/')[1]
        const year = this.date.split('/')[2]
        return `${month}/${day}/${year}`
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
                UI.renameTask(this.label, this.name, input.value);
                console.log(input.value)
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
            task.remove();
            
            UI.deleteTask(this.label, this.name);
        };

        const inputDate = document.createElement("input");
        inputDate.type = "date";
        inputDate.addEventListener("change", () => {
            const newDate = format(new Date(inputDate.value), 'dd/MM/yyyy');
            UI.changeDate(this.label, this.name, newDate);
            date.textContent = newDate;
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