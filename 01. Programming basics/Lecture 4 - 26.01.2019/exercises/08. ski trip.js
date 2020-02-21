function skiTrip(arguments) {
    let days = Number(arguments.shift());
    let room = arguments.shift();
    let feedback = arguments.shift();

    let nights = days - 1;
    let price = 0;

    switch (room) {
        case "room for one person":
            price = nights * 18;
            if (feedback == "positive") {
                price = price * 1.25;
            } else {
                price = price - (price * 0.10);
            }
            break;
        case "apartment":
            if (nights < 10) {
                price = (nights * 25) - (nights * 25 * 0.30);
            } else if (nights >= 10 && nights <= 15) {
                price = (nights * 25) - (nights * 25 * 0.35);
            } else if (nights > 15) {
                price = (nights * 25) - (nights * 25 * 0.50);
            }

            if (feedback == "positive") {
                price = price * 1.25;
            } else if (feedback == "negative") {
                price = price - (price * 0.10);
            }

            break;
        case "president apartment":
            if (nights < 10) {
                price = (nights * 35) - (nights * 35 * 0.10);
            } else if (nights >= 10 && nights <= 15) {
                price = (nights * 35) - (nights * 35 * 0.15);
            } else if (nights > 15) {
                price = (nights * 35) - (nights * 35 * 0.20);
            }

            if (feedback == "positive") {
                price = price * 1.25;
            } else if (feedback == "negative") {
                price = price - (price * 0.10);
            }
            break;
    }

    console.log(price.toFixed(2));
}