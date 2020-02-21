function footballTrip(arguments) {
    let ticket1 = Number(arguments.shift());
    let ticket2 = Number(arguments.shift());
    let ticketMatch = Number(arguments.shift());
    let numberOfMatches = Number(arguments.shift());
    let percentDiscount = Number(arguments.shift());

    let airFare = ticket1 + ticket2;
    airFare = airFare - (airFare * percentDiscount / 100);
    let total = 6 * (airFare + (ticketMatch * numberOfMatches));
    let each = total / 6;

    console.log(`Total sum: ${total.toFixed(2)} lv.`);
    console.log(`Each friend has to pay ${each.toFixed(2)} lv.`);
}

footballTrip([175, 280, 125, 5, 15]);
footballTrip([210, 235, 150, 6, 12]);
footballTrip([218.55, 185.90, 170.50, 4, 17]);