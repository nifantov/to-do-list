
import Input from "./Input";
import Catalog from "./Catalog";
import Label from "./Label";
import Task from "./Task";
import LocalStorage from "./LocalStorage";

const catalog = new Catalog;


export default class UI {

    static load() {

        UI.install();
        
        
        const firstLabel = new Label("First Label")
        const secondLabel = new Label ("Second Label")
        catalog.addLabel(firstLabel);
        catalog.addLabel(secondLabel);
        firstLabel.addTask(new Task("first Task 1", "First Label"));
        firstLabel.addTask(new Task("second Task 1", "First Label", "2022-05-03"));
        secondLabel.addTask(new Task("first Task 22222222", "Second Label", "2022-05-05"))
        
        
        catalog.loadLabelList();
        catalog.getLabel("First Label").openLabel();
        UI.buttonsListeners();
        LocalStorage.saveCatalog(catalog);
        console.log("load")
    }

    static buttonsListeners() {
        const addLabelButton = document.getElementById("addLabel");
        const addTaskButton = document.getElementById("addTask");
        
        addLabelButton.onclick = () => createLabel.open();
        addTaskButton.onclick = () => createTask.open();   

        const labelsButtons = document.querySelectorAll(".label");
        labelsButtons.forEach((label) => {
            label.onclick = () => {
                const labelName = label.textContent;
                catalog.getLabel(labelName).openLabel()
            };
        }) 

    }

    static add(type, name) {
        if (type === "label") {
            catalog.addLabel(new Label(name));
            catalog.getLabel(name).create()
            catalog.getLabel(name).openLabel();
            UI.buttonsListeners();
            
        }
        else if (type === "task") {
            const labelName = document.getElementById("label-name").textContent;     
            catalog.getLabel(labelName).addTask(new Task(name, labelName));
            catalog.getLabel(labelName).findTask(name).create();

        }
    }

    static clearTaskList() {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";
    }

    static loadTaskList(labelName) {
        const currentLabel = catalog.getLabel(labelName);
        const labelTitle = document.getElementById("label-name");
        labelTitle.textContent = labelName;
        currentLabel.tasks.forEach(task => task.create());
    }

    static deleteTask(label, task) {
        catalog.deleteTask(label, task);
        console.log(catalog)
    }
    
    static install() {
        catalog.addLabel(new Label("All tasks"));
        catalog.addLabel(new Label("Today"));
        catalog.addLabel(new Label("This week"));
        catalog.addLabel(new Label("Someday"));
        
    }

    static updateDefaultLabels() {
        const allTasks = catalog.getLabel("All tasks");
        const today = catalog.getLabel("Today");
        const week = catalog.getLabel("This week");
        const someDay = catalog.getLabel("Someday");

    }

}


const createLabel = new Input("label", "addLabelContainer", "label-list", "addLabel");
const createTask = new Input("task", "addTaskContainer", "task-list", "addTask");
