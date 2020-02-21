function houseParty(input) {
    let guests = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let nameOfGuest = command[0];

        if (command.length === 3) {
            let isIncluded = guests.includes(nameOfGuest);
            if (isIncluded) {
                console.log(`${nameOfGuest} is already in the list!`);
            } else {
                guests.push(nameOfGuest);
            }
        } else if (command.length === 4) {
            let indexOfPerson = guests.indexOf(nameOfGuest);

            if (indexOfPerson !== -1) {
                guests.splice(indexOfPerson, 1);
            } else {
                console.log(`${nameOfGuest} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}

// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']
// );
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);