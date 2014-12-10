/*
Define a generic algorythm and make implementations interchangable
Allows for flexibility in choise of strategy in given context
*/

module Strategy {
    
    export interface IStrategy {
        execute(): void;
    }

    export class StrategyOne implements IStrategy {
        public execute(): void {
            write("StrategyOne executed");
        }
    }

    export class StrategyTwo implements IStrategy {
        public execute(): void {
            write("StrategyTwo executed");
        }
    }
    
    export class Context {
        private strategy: IStrategy;

        constructor(strategy: IStrategy) {
            this.strategy = strategy;
        }

        public executeStrategy(): void {
            this.strategy.execute();
        }
    }
}

var context = new Strategy.Context(new Strategy.StrategyOne());
context.executeStrategy();

var otherContext = new Strategy.Context(new Strategy.StrategyTwo());
otherContext.executeStrategy();