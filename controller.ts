/*
Encapsulates a reusable UI element
Allows for element to be reused
*/

module Controller {
    
    export class ProductOptions {
        text: string;

        constructor(text: string) {
            this.text = text;
        }
    }

    export class ProductController {
        element: HTMLElement;
        options: ProductOptions;
        inputQuantity: HTMLInputElement;

        constructor(element: HTMLElement, options: ProductOptions) {
            this.element = element;
            this.options = options;

            this.render();
            this.addEventHandlers();
        }

        private render() {
            (<HTMLLabelElement>this.element.querySelector("label")).innerHTML = this.options.text;
        }

        private addEventHandlers() {
            this.element.querySelector("input.addProductButton").addEventListener("click", () => {
                this.addToBasket((<HTMLInputElement>this.element.querySelector("input.productName")).value);
            });
        }

        addToBasket(val) {
            if (val) {
                (<HTMLUListElement>this.element.querySelector(".productList")).innerHTML += "<li>" + val + "</li>";
            }
        }
    }
}

var product = new Controller.ProductController(document.getElementById("controllerElement"), new Controller.ProductOptions("Product: "));