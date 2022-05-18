import Catalog from "./Catalog";
import Label from "./Label";
import Task from "./Task";


export default class LocalStorage {

    static saveCatalog(catalog) {
        
        catalog.updateDefaultTasks();
        localStorage.setItem("catalog", JSON.stringify(catalog));
          
    }

    static getCatalog() {
        const catalog = Object.assign(
        new Catalog(),
        JSON.parse(localStorage.getItem("catalog"))
        )
        catalog.setCatalog(
            catalog
            .getCatalog()
            .map(label => Object.assign(new Label(), label))
        )
        catalog
        .getCatalog()
        .forEach(label => 
            label.setTasks(
                label
                .getTasks()
                .map(task => Object.assign(new Task(), task))
            )
        )
        
        return catalog;
    }

    static addLabel(newLabel) {
        const catalog = LocalStorage.getCatalog();
        catalog.addLabel(newLabel);
        console.log(catalog)
        LocalStorage.saveCatalog(catalog);
    }

    static addTask(labelName, name) {
        const catalog = LocalStorage.getCatalog();
        catalog.getLabel(labelName).addTask(new Task(name, labelName));
        catalog.getLabel(labelName).findTask(name).create();
        
        LocalStorage.saveCatalog(catalog);
        console.log(LocalStorage.getCatalog())
    }

    static deleteLabel(label) {
        const catalog = LocalStorage.getCatalog();
        catalog.deleteLabel(label);
        LocalStorage.saveCatalog(catalog);
        console.log(LocalStorage.getCatalog());
    }

    static deleteTask(label, task) {
        const catalog = LocalStorage.getCatalog();
        catalog.deleteTask(label, task);
        LocalStorage.saveCatalog(catalog);
        console.log(LocalStorage.getCatalog())
    }

    static renameTask(label, task, newName) {
        const catalog = LocalStorage.getCatalog();
        catalog.getLabel(label).findTask(task).setName(newName);
        LocalStorage.saveCatalog(catalog);
        console.log(LocalStorage.getCatalog())
    }

    static changeDate(label, task, newDate) {
        const catalog = LocalStorage.getCatalog();
        catalog.getLabel(label).findTask(task).setDate(newDate);
        LocalStorage.saveCatalog(catalog);
        console.log(LocalStorage.getCatalog())
    }

    static updateAllTasks() {
        const catalog = LocalStorage.getCatalog();
        catalog.updateAllTasks();
        LocalStorage.saveCatalog(catalog);
        console.log(LocalStorage.getCatalog());
    }
}