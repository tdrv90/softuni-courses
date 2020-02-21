function skiTrip(arguments) {
    let nights = Number(arguments.shift());
    let room = arguments.shift();
    let feedback = arguments.shift();

    let price = 0;
    let totalPrice = 0;
    nights -= 1;

    switch (room) {
        case "room for one person":
            price = 18;
            totalPrice = price * nights;
            break;
        case "apartment":
            price = 25;
            totalPrice = price * nights;
            if (nights < 10) {
                totalPrice = totalPrice - (totalPrice * 0.30);
            } else if (nights >= 10 && nights <= 15) {
                totalPrice = totalPrice - (totalPrice * 0.35);
            } else if (nights > 15) {
                totalPrice = totalPrice - (totalPrice * 0.50);
            }
            break;
        case "president apartment":
            price = 35;
            totalPrice = price * nights;
            if (nights < 10) {
                totalPrice = totalPrice - (totalPrice * 0.10);
            } else if (nights >= 10 && nights <= 15) {
                totalPrice = totalPrice - (totalPrice * 0.15);
            } else if (nights > 15) {
                totalPrice = totalPrice - (totalPrice * 0.20);
            }
            break;
    }

    if (feedback == "positive") {
        totalPrice *= 1.25;
    } else if (feedback == "negative") {
        totalPrice = totalPrice - (totalPrice * 0.10);
    }

    console.log(totalPrice.toFixed(2));
}

skiTrip([14, "apartment", "positive"]);
skiTrip([30, "president apartment", "negative"]);
skiTrip([12, "room for one person", "positive"]);
skiTrip([2, "apartment", "positive"]);