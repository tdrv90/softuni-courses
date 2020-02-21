function fishingBoat(arguments) {
    let budget = Number(arguments.shift());
    let season = arguments.shift().toLowerCase();
    let fishermans = Number(arguments.shift());

    let rent = 0;

    switch (season) {
        case "spring":
            rent = 3000;
            if (fishermans <= 6) {
                rent = rent - (rent * 0.10);
            } else if (fishermans <= 11) {
                rent = rent - (rent * 0.15);
            } else {
                rent = rent - (rent * 0.25);
            }
            if (fishermans % 2 == 0) {
                rent = rent - (rent * 0.05);
            }
            break;
        case "summer":
            rent = 4200;
            if (fishermans <= 6) {
                rent = rent - (rent * 0.10);
            } else if (fishermans <= 11) {
                rent = rent - (rent * 0.15);
            } else {
                rent = rent - (rent * 0.25);
            }
            if (fishermans % 2 == 0) {
                rent = rent - (rent * 0.05);
            }
            break;
        case "autumn":
            rent = 4200;
            if (fishermans <= 6) {
                rent = rent - (rent * 0.10);
            } else if (fishermans <= 11) {
                rent = rent - (rent * 0.15);
            } else {
                rent = rent - (rent * 0.25);
            }
            break;
        case "winter":
            rent = 2600;
            if (fishermans <= 6) {
                rent = rent - (rent * 0.10);
            } else if (fishermans <= 11) {
                rent = rent - (rent * 0.15);
            } else {
                rent = rent - (rent * 0.25);
            }
            if (fishermans % 2 == 0) {
                rent = rent - (rent * 0.05);
            }
            break;
    }

    let difference = budget - rent;

    if (budget >= rent) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(difference).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);