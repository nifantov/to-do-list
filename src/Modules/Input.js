import UI from "./UI";

export default class Input {

    constructor(type, idButtonContainer, idContainer, idButton) {
        this.type = type;
        this.idButtonContainer = idButtonContainer;
        this.idContainer = idContainer;
        this.idButton = idButton;
    }

     open() {
        const buttonContainer = document.getElementById(this.idButtonContainer);
        const button = document.getElementById(this.idButton);
        const input = document.createElement("input")
        const acceptButton = document.createElement("button");
        const cancelButton = document.createElement("button");

        button.classList.remove("active");
        button.classList.add("notactive");

        acceptButton.textContent = "yes";
        cancelButton.textContent = "no";

        acceptButton.id = "acceptButton";
        cancelButton.id = "cancelButton";

        acceptButton.onclick = () => {
            UI.add(this.type, input.value);
            console.log(this.type)
            this.close();
        }
        cancelButton.onclick = () => this.close();

        buttonContainer.appendChild(input);
        buttonContainer.appendChild(acceptButton)
        buttonContainer.appendChild(cancelButton)

    }


    close() {
        
        const input = document.querySelector("input");
        const acceptButton = document.getElementById("acceptButton");
        const cancelButton = document.getElementById("cancelButton");
        const button = document.getElementById(this.idButton);
        
        button.classList.remove("notactive");
        button.classList.add("active");

        input.remove();
        acceptButton.remove();
        cancelButton.remove();
    }

}