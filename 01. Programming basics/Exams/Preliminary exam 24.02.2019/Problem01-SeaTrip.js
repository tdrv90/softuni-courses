function seaTrip(arguments) {
    let foodPerDay = Number(arguments.shift());
    let souveniersPerDay = Number(arguments.shift());
    let hotelPerDay = Number(arguments.shift());

    let gasMoney = 2 * 2.1 * 7 * 1.85;
    let foodAndSouveniers = (foodPerDay + souveniersPerDay) * 3;
    let hotelTotal = (hotelPerDay * 0.90) + (hotelPerDay * 0.85) + (hotelPerDay * 0.80);

    let total = gasMoney + foodAndSouveniers + hotelTotal;

    console.log(`Money needed: ${total.toFixed(2)}`);
}

seaTrip([100, 50, 500]);
seaTrip([200, 200, 1000]);
seaTrip([50, 50, 120]);