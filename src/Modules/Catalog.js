import Label from "./Label"


export default class Catalog {
    constructor() {
        this.catalog = [];
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
        this.catalog.forEach(label => {
            label.create();
        })
    }
 
    deleteTask(label, task) {
        this.getLabel(label).deleteTask(task);
    }


    install() {
        catalog.addLabel(new Label("All tasks"));
        catalog.addLabel(new Label("Today"));
        catalog.addLabel(new Label("This week"));
        catalog.addLabel(new Label("Someday"));

    }
}