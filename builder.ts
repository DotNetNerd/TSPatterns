/*
Provide methods for building an object, rather than muitiple complex constructors
Allows building complex objects in simpler steps
*/

module Builder {
    export class CarBuilder {
        name: string;
        year: number;
        make: string;
        model: string;

        constructor(name: string) {
            this.name = name;
        }
        
        setYear(value: number): CarBuilder {
            this.year = value;
            return this;
        }

        setModel(make: string, model: string): CarBuilder {
            this.make = make;
            this.model = model;
            return this;
        }
        
        build(): Car {
            return new Car(this);
        }
    }

    export class Car {
        private name: string;
        private year: number;
        private make: string;
        private model: string;

        constructor(builder: CarBuilder) {
            this.name = builder.name;
            this.year = builder.year;
            this.make = builder.make;
            this.model = builder.model;
        }
    }
}

var myOldCar = new Builder.CarBuilder("Rusty")
    .setModel("Skoda", "Fabia")
    .setYear(2000)
    .build();

write(myOldCar);