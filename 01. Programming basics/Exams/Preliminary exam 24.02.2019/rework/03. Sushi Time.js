function sushiTime(arguments) {
    let type = arguments.shift();
    let restaurant = arguments.shift();
    let orders = Number(arguments.shift());
    let home = arguments.shift();
    let total = 0;
    let isRestaurant = true;

    switch (restaurant) {
        case "Sushi Zone":
            if (type == "sashimi") {
                total = orders * 4.99;
            } else if (type == "maki") {
                total = orders * 5.29;
            } else if (type == "uramaki") {
                total = orders * 5.99;
            } else if (type == "temaki") {
                total = orders * 4.29;
            }
            break;
        case "":
            if (type == "sashimi") {
                total = orders * 5.49;
            } else if (type == "maki") {
                total = orders * 4.69;
            } else if (type == "uramaki") {
                total = orders * 4.49;
            } else if (type == "temaki") {
                total = orders * 5.19;
            }
            break;
        case "":
            if (type == "sashimi") {
                total = orders * 5.25;
            } else if (type == "maki") {
                total = orders * 5.55;
            } else if (type == "uramaki") {
                total = orders * 6.25;
            } else if (type == "temaki") {
                total = orders * 4.75;
            }
            break;
        case "":
            if (type == "sashimi") {
                total = orders * 4.50;
            } else if (type == "maki") {
                total = orders * 4.80;
            } else if (type == "uramaki") {
                total = orders * 5.50;
            } else if (type == "temaki") {
                total = orders * 5.50;
            }
            break;

        default:
            isRestaurant = false;
            console.log(`${restaurant} is invalid restaurant!`)
            break;
    }

    if (home == "Y") {
        total *= 1.20;
    }

    if (isRestaurant) {
        console.log(`Total price: ${Math.ceil(total)} lv.`);
    }
}

sushiTime(["maki", "Sushi Zone", 4, "Y"])
sushiTime(["maki", "Sasa", 4, "Y"])