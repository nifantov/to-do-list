import Catalog from "./Catalog";
import Label from "./Label";
import Task from "./Task";

export default class LocalStorage {

    static saveCatalog(catalog) {
        localStorage.setItem('catalog', JSON.stringify(catalog));
          
    }

/*     static getCatalog() {
        const catalog = Object.assign(
        new Catalog(),
        JSON.parse(localStorage.getItem("catalog"))
        
        )
        console.log(catalog)
    } */
}