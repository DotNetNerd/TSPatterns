/*
Record all events, and allow them to be played back, maintaning all data over time, rather than just the current state.
Provide multiple views over the same data.
1: Store events.
2: Define commands.
3: Fold events into a view by applying command.
*/

module EventSource {
    export interface IEvent {
        time: Date
        type: string
    }

    export interface ICommand {
        type: string
        execute: (model, event) => any
    }
}

/* Create an array of events */
var events: EventSource.IEvent[] = [];
events.push({ type: "CreateProduct", time: new Date(2014, 0, 1, 10), name: "Car", inStock: 2 });
events.push({ type: "AddToStock", time: new Date(2014, 6, 1, 10), addToStock: 5 });

/* And an array of commands for the events */
var commandList: EventSource.ICommand[] = [];
commandList.push({
    type: "CreateProduct",
    execute: (model, event) => {
        return { name: event.name, inStock: event.inStock };
    }
});

commandList.push({
    type: "AddToStock",
    execute: (model, event) => {
        model.inStock += event.addToStock;
        return model;
    }
});

var aggregateEvents = (eventsToAggregate : EventSource.IEvent[]) => {
    var view = eventsToAggregate.reduce((model, event, index, array) => {
        var command = commandList.filter((c: EventSource.ICommand) => c.type == event.type);
        if (command.length != 1) throw "There must be one command assigned for each event type";

        return command[0].execute(model, event);
    }, {});
    return view;
}

var view = aggregateEvents(events);
write(view);

/* Optionally filter which elements to use for view */
var eventsBeforeJuly = events.filter((e) => e.time < new Date(2014, 6, 1, 10));

var viewBeforeJuly = aggregateEvents(eventsBeforeJuly);
write(viewBeforeJuly);