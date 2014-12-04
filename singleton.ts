/*
Ensure that only one instance of a class is created
Provide a global point of access to the object
*/

module Singleton {
    
    export class SingletonClass {

        private static instance: SingletonClass = new SingletonClass();

        private count: number = 0;

        constructor() {
            if (SingletonClass.instance) {
                throw new Error("Error constructor should not be used directly. Use getInstance() instead.");
            }
            SingletonClass.instance = this;
        }

        public static getInstance(): SingletonClass {
            if (SingletonClass.instance === null) {
                SingletonClass.instance = new SingletonClass();
            }
            return SingletonClass.instance;
        }

        public setCount(value: number): void {
            this.count = value;
        }

        public getCount(): number {
            return this.count;
        }

        public add(value: number): void {
            this.count += value;
        }

        public remove(value: number): void {
            this.count -= value;
        }

    }
}

var counter = Singleton.SingletonClass.getInstance();
var counter2 = Singleton.SingletonClass.getInstance();
counter.setCount(20);
counter2.add(5);
counter.remove(15);
write(counter.getCount());