function sushiZone(arguments) {
    let type = arguments.shift();
    let restaurant = arguments.shift();
    let portions = Number(arguments.shift());
    let orderForHome = arguments.shift();

    let total = 0;
    let isValid = true;

    switch (restaurant) {
        case "Sushi Zone":
            switch (type) {
                case "sashimi": total = portions * 4.99; break;
                case "maki": total = portions * 5.29; break;
                case "uramaki": total = portions * 5.99; break;
                case "temaki": total = portions * 4.29; break;
            }
            break;
        case "Sushi Time":
            switch (type) {
                case "sashimi": total = portions * 5.49; break;
                case "maki": total = portions * 4.69; break;
                case "uramaki": total = portions * 4.49; break;
                case "temaki": total = portions * 5.19; break;
            }

            break;
        case "Sushi Bar":
            switch (type) {
                case "sashimi": total = portions * 5.25; break;
                case "maki": total = portions * 5.55; break;
                case "uramaki": total = portions * 6.25; break;
                case "temaki": total = portions * 4.75; break;
            }

            break;
        case "Asian Pub":
            switch (type) {
                case "sashimi": total = portions * 4.50; break;
                case "maki": total = portions * 4.80; break;
                case "uramaki": total = portions * 5.50; break;
                case "temaki": total = portions * 5.50; break;
            }

            break;
        default:
            isValid = false;
            console.log(`${restaurant} is invalid restaurant!`);
            break;
    }

    if (isValid) {
        if (orderForHome == "Y") {
            total *= 1.20;
        }
        console.log(`Total price: ${Math.ceil(total)} lv.`);
    }
}

// sushiZone(["maki", "Sushi Zone", 4, "Y"]);
sushiZone(["temaki", "Asian Pub", 5, "N"]);
sushiZone(["temaki", "SASA", 5, "N"]);