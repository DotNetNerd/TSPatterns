/*
Define an algorythm as a series of replacable steps
Allows for flexibile reuse of an algorythm
*/

module TemplateMethod {
    
    export class AbstractClass {
        public beforeStep(): void {
            throw new Error("Abstract Method");
        }

        public fixedStep(): void {
            write("Fixed step");
        }

        public afterStep(): void {
            throw new Error("Abstract Method");
        }

        public templateMethod(): void {
            write("templateMethod called");
            this.beforeStep();
            this.fixedStep();
            this.afterStep();
        }
    }

    export class ConcreteClassOne extends AbstractClass {
        public beforeStep(): void {
            write("beforeStep of ConcreteClassOne");
        }

        public afterStep(): void {
            write("afterStep of ConcreteClassOne");
        }
    }

    export class ConcreteClassTwo extends AbstractClass {
        public beforeStep(): void {
            write("beforeStep of ConcreteClassTwo");
        }

        public afterStep(): void {
            write("afterStep of ConcreteClassTwo");
        }
    }
}

var concrete1: TemplateMethod.ConcreteClassOne = new TemplateMethod.ConcreteClassOne(),
    concrete2: TemplateMethod.ConcreteClassTwo = new TemplateMethod.ConcreteClassTwo();

concrete1.templateMethod();
concrete2.templateMethod();