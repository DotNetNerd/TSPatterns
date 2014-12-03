/*
Encapsulates a command as an object
Allows commands to be stored in a queue
Makes it possible to execute command in different contexts
*/

module Command {
    export interface ICommand {
        text: string;
        execute: () => void;
    }

    export class AddCommand implements ICommand {
        text: string;

        private a: number
        private b: number
        
        constructor(a: number, b: number) {
                this.a = a;
                this.b = b;
        }

        execute() {
            write(this.text + " " + (this.a + this.b).toString());
        }
    }

    export class SubtractCommand implements ICommand {
        text: string;

        private a: number
        private b: number

        constructor(a: number, b: number) {
                this.a = a;
                this.b = b;
        }

        execute() {
            write(this.text + " " + (this.a - this.b));
        }
    }

    export class CommandProcessor {
        text: string
    constructor(text: string) {
            this.text = text;
        }
        execute(commands: ICommand[]) {
            commands.forEach(c => {
                c.text = this.text;
                c.execute();
            });
        }
    }
}

var commands: Command.ICommand[] = [new Command.AddCommand(2, 4), new Command.SubtractCommand(2, 4)];

var commandProcessor = new Command.CommandProcessor("Context 1:"),
    commandProcessor2 = new Command.CommandProcessor("Context 2:");

commandProcessor.execute(commands);
commandProcessor2.execute(commands);