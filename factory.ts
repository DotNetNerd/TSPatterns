/*
Hides complexety of object construction 
Allows for multiple implementations of same basetype or interface
*/

module Factory {
    
    /* Define interface or basetype */
    export interface IProduct {
        text: string;
        price: number;
        print():void;
    }

    /* Optionally have different implementations of the interface/basetype */
    class ConsumerProduct implements IProduct {
        text: string;
        price: number;

        constructor(text: string, listPrice: number) {
            this.text = text;
            this.price = Math.round(listPrice * 1.1);
        }

        print() {
            write("Consumer product: " + this.text + " Price: " + this.price);
        }
    }

    class BusinessProduct implements IProduct {
        text: string;
        price: number;

        constructor(text: string, listPrice: number) {
            this.text = text;
            this.price = Math.round(listPrice * 1.2);
        }

        print() {
            write("Business product: " + this.text + " Price: " + this.price);
        }
    }

    /* Implement factory function to handle object construction */
    
    export function create(type: string, name: string, listPrice: number) : IProduct {
        if (type === "consumer") {
            return new ConsumerProduct(name, listPrice);
        } else if (type === "business") {
            return new BusinessProduct(name, listPrice);
        }

        throw type + " is not a valid type";
    }
}

var consumerProduct = Factory.create("consumer", "Jacket", 100);
var businessProduct = Factory.create("business", "Jacket", 100);

consumerProduct.print();
businessProduct.print();