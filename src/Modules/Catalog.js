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
    
}