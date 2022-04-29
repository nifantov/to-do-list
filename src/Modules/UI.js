

export default class UI {

    static load() {
        UI.buttonsListeners();
        console.log("load")
    }

    static buttonsListeners() {
        const addLabelButton = document.getElementById("addLabel");
        const addTaskButton = document.getElementById("addTask")
        
        addLabelButton.onclick = () => createLabel.open();
        addTaskButton.onclick = () => {
     
            addLabel.open("task-list");
        }
    }
    




    //Creating content
    static create(value, id) {
       /* id === "addLabelContainer" ? UI.createLabel(value) : UI.createTask(value); */

    }

    static createLabel(newLabel) {
        const labels = document.getElementById("labels");
        const label = document.createElement("button")
        label.textContent = newLabel;
        labels.appendChild(label)
        Input.close();
    }

    static createTask(newTask) {
        const tasks = document.getElementById("task-list");
        const task = document.createElement("button")
        task.textContent = newTask;
        tasks.appendChild(task)
        Input.close();
    }

 


}





class Input {

    constructor(type, idButton, idContainer) {
        this.type = type;
        this.idButton = idButton;
        this.idContainer = idContainer;
    }

     open() {
        const labels = document.getElementById(this.idButton);

        const input = document.createElement("input")
        const acceptButton = document.createElement("button");
        const cancelButton = document.createElement("button");

        acceptButton.textContent = "yes";
        cancelButton.textContent = "no";

        acceptButton.id = "acceptButton";
        cancelButton.id = "cancelButton";

        acceptButton.onclick = () => this.create(input.value);
        cancelButton.onclick = () => Input.close()

        labels.appendChild(input);
        labels.appendChild(acceptButton)
        labels.appendChild(cancelButton)
        
        console.log("open");
    }

     create(value) {
        console.log("create")
        const container = document.getElementById(this.idContainer);
        const element = document.createElement("button");
        element.textContent = value;
        container.appendChild(element);
        Input.close();
    }

    static close() {
        const input = document.querySelector("input");
        const acceptButton = document.getElementById("acceptButton");
        const cancelButton = document.getElementById("cancelButton");
        
        input.remove();
        acceptButton.remove();
        cancelButton.remove()
        console.log("close")
    }

}

const createLabel = new Input("label", "addLabelContainer", "labels");
//const createTask = new Input("")
