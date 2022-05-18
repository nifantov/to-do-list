
import Input from "./Input";
import Catalog from "./Catalog";
import Label from "./Label";
import Task from "./Task";
import LocalStorage from "./LocalStorage";




export default class UI {

    static load() {
        
        const catalog = LocalStorage.getCatalog();
        catalog.loadLabelList();
        
        UI.openDefaultLabel();
        UI.buttonsListeners();
        
    }

    static buttonsListeners() {
        const addLabelButton = document.getElementById("addLabel");
        const addTaskButton = document.getElementById("addTask");
        UI.updateDefaultLabels();
        addLabelButton.onclick = () => createLabel.open();
        addTaskButton.onclick = () => createTask.open();   

        const labelsButtons = document.querySelectorAll(".label-name");
        labelsButtons.forEach(label => {
            label.onclick = () => {
                const labelName = label.textContent;
                LocalStorage.getCatalog().getLabel(labelName).openLabel();
                UI.buttonsListeners()
            };
        }) 

    }

    static add(type, name) {
        if (type === "label") {
            LocalStorage.addLabel(new Label(name));
            LocalStorage.getCatalog().getLabel(name).create()
            LocalStorage.getCatalog().getLabel(name).openLabel();
            UI.buttonsListeners();
        }

        else if (type === "task") {
            const labelName = document.getElementById("label-name").textContent; 
            LocalStorage.addTask(labelName, name);
            
            
        }
    }

    static clearTaskList() {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";
    }

    static loadTaskList(labelName) {
        const currentLabel = LocalStorage.getCatalog().getLabel(labelName);
        const labelTitle = document.getElementById("label-name");
        labelTitle.textContent = labelName;
        currentLabel.tasks.forEach(task => task.create());
        
    }

    static renameTask(label, task, newName) {
        LocalStorage.renameTask(label, task, newName);
    }

    static changeDate(label, task, newDate) {
        LocalStorage.changeDate(label, task, newDate);
    }

    static deleteLabel(label) {
        LocalStorage.deleteLabel(label);
        UI.openDefaultLabel();
    }

    static deleteTask(label, task) {
        LocalStorage.deleteTask(label, task);
    }

    static openDefaultLabel() {
        const catalog = LocalStorage.getCatalog();
        catalog.getLabel("Today").openLabel(); 
        
    }
    /////
    static updateDefaultLabels() {
        
        LocalStorage.updateAllTasks();
    }



   
}


const createLabel = new Input("label", "addLabelContainer", "label-list", "addLabel");
const createTask = new Input("task", "addTaskContainer", "task-list", "addTask");
