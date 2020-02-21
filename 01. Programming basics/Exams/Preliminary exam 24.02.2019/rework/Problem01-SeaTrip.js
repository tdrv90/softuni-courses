function seaTrip (arguments) {
    let foodMoneyPerDay = Number(arguments.shift());
    let souvenierMoneyPerDay = Number(arguments.shift());
    let hotelMoneyPerDay = Number(arguments.shift());

    let hotel3days = (hotelMoneyPerDay * 0.90) + (hotelMoneyPerDay * 0.85) + (hotelMoneyPerDay * 0.80);
    let souveniers3days = souvenierMoneyPerDay * 3;

    let total = 54.39 + hotel3days + souvenierMoneyPerDay * 3 + foodMoneyPerDay * 3;

    console.log(`Money needed: ${total.toFixed(2)}`);
}

seaTrip([100, 50, 500]);
seaTrip([200, 200, 1000]);
seaTrip([50, 50, 120]);