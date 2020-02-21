function bachelorParty(arguments) {
    let singer = Number(arguments.shift());
    let total = 0;
    let guestCounter = 0;

    let command = arguments.shift();

    while (command != "The restaurant is full") {
        let guestsPerReservation = Number(command);
        if (guestsPerReservation < 5) {
            total += guestsPerReservation * 100;
        } else {
            total += guestsPerReservation * 70;
        }
        guestCounter += guestsPerReservation;
        command = arguments.shift();
    }
    let diff = total - singer;

    if (total >= singer) {
        console.log(`You have ${guestCounter} guests and ${diff} leva left.`)
    } else { 
        console.log(`You have ${guestCounter} guests and ${total} leva income, but no singer.`)
    }
}

bachelorParty([2800, 5, 5, 4, 6, 6, 12, 12, "The restaurant is full"]);
bachelorParty([3200, 5, 12, 6, 6, 12, "The restaurant is full"]);
bachelorParty([1800, 4, 4, 4, 4, 6, 6, "The restaurant is full"]);