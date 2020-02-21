function gamingHall(arguments) {
    let month = arguments.shift();
    let hours = Number(arguments.shift());
    let people = Number(arguments.shift());
    let timeOfDay = arguments.shift();

    let price = 0;
    let totalPricePerPerson = 0;
    let totalPrice = 0;

    switch (month) {
        case "march":
        case "april":
        case "may":
            if (timeOfDay == "day") {
                price = 10.50;
            } else if (timeOfDay == "night") {
                price = 8.40;
            }
            break;
        case "june":
        case "july":
        case "august":
            if (timeOfDay == "day") {
                price = 12.60;
            } else if (timeOfDay == "night") {
                price = 10.20;
            }
            break;
    }

    if (people >= 4) {
        price = price - (price * 0.10);
    }
    if (hours >= 5) {
        price = price - (price * 0.50);
    }

    totalPricePerPerson = price * hours;
    totalPrice = totalPricePerPerson * people;

    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}

gamingHall(["march", 3, 3, "day"]);
gamingHall(["july", 5, 5, "night"]);