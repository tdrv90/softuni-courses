function train(arguments) {
    let wagons = arguments.shift().split(" ").map(Number);
    let maxCapacity = Number(arguments.shift());

    for (let line of arguments) {
        let command = line.split(" ");

        if (command.length === 2) {
            let passengersToBeAddedInNewWagon = command[1];
            wagons.push(passengersToBeAddedInNewWagon);
        } else {
            let passengersToBeAdded = Number(command[0]);

            for (let i = 0; i < wagons.length; i++) {
                let current = wagons[i];

                if (passengersToBeAdded + current <= maxCapacity) {
                    wagons[i] += passengersToBeAdded;
                    break;
                }
            }
        }
    }

    return wagons.join(' ');
}

// console.log(train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75']
// ));
console.log(train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
));

// 72 54 21 12 4 75 23 10 0