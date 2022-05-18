import Label from "./Label"
import Task from "./Task";
import UI from "./UI";


export default class Catalog {
    constructor() {
        this.catalog = [];
        this.catalog.push(new Label("All tasks"), new Label("Today"), new Label("This week"), new Label("Someday"));
    }

    setCatalog(catalog) {
        this.catalog = catalog;
    }

    getCatalog() {
        return this.catalog;
    }


    addLabel(newLabel) {
        this.catalog.push(newLabel);
    }

    deleteLabel(deleteLabel) {
        this.catalog = this.catalog.filter(label => label.name !== deleteLabel);
    }
    
    getLabel(labelName) {
      return this.catalog.find(label => label.getName() === labelName);
    }

   loadLabelList() {
        this.catalog.forEach(label => Catalog.checkingDefaultLabels(label) ? 
            label.create() : label.createDefault())
    }

    static checkingDefaultLabels(label) {
        return (
             label.getName() !== "Today" && 
             label.getName() !== "This week" && 
             label.getName() !=="All tasks" && 
             label.getName() !== "Someday"
         )
    }
 
    deleteTask(label, task) {
        this.getLabel(label).deleteTask(task);
    }

    updateDefaultTasks() {
        this.updateAllTasks();
        this.updateTodayTasks();
        this.updateWeekTasks()
        this.updateSomeDayTasks()
    }

    updateAllTasks() {
        this.getLabel("All tasks").tasks = [];
        this.getCatalog().forEach(label => {
            if (!Catalog.checkingDefaultLabels(label)) return;
            label.getTasks().forEach(task => {
                    this.getLabel("All tasks").addTask(task)
            })
        })
    }

    updateTodayTasks() {
        this.getLabel("Today").tasks = [];
        this.getCatalog().forEach(label => {
            if (!Catalog.checkingDefaultLabels(label)) return;
            label.getTodayTasks().forEach(task => {
                this.getLabel("Today").addTask(task)
            })   
        })
    }

    updateWeekTasks() {
        this.getLabel("This week").tasks = [];
        this.getCatalog().forEach(label => {
            if (!Catalog.checkingDefaultLabels(label)) return;
            label.getWeekTasks().forEach(task => {
                this.getLabel("This week").addTask(task);
            })   
        })
    }

    updateSomeDayTasks() {
        this.getLabel("Someday").tasks = [];
        this.getCatalog().forEach(label => {
            if (!Catalog.checkingDefaultLabels(label)) return;
            label.getSomedayTasks().forEach(task => {
                this.getLabel("Someday").addTask(task);
            })   
        })
    }





}