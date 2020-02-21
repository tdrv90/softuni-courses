function bachelorParty(arguments) {
    let singerCost = Number(arguments.shift());

    let command = arguments.shift();
    let income = 0;
    let guests = 0;

    while (command != "The restaurant is full") {
        let reservations = Number(command);

        if (reservations < 5) {
            income += reservations * 100;
            guests += reservations;
        } else if (reservations >= 5) {
            income += reservations * 70;
            guests += reservations;
        }


        command = arguments.shift();
    }
    let moneyLeft = income - singerCost;

    if (income >= singerCost) {
        console.log(`You have ${guests} guests and ${moneyLeft} leva left.`);
    } else {
        console.log(`You have ${guests} guests and ${income} leva income, but no singer.`);
    }
}

// bachelorParty([2800, 5, 5, 4, 6, 6, 12, 12, "The restaurant is full"]);
// bachelorParty([3200, 5, 12, 6, 6, 12, "The restaurant is full"]);
bachelorParty([1800, 4, 4, 4, 4, 6, 6, "The restaurant is full"]);