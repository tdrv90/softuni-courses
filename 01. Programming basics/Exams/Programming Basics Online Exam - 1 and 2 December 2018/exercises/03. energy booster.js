function energyGels(arguments) {
    let fruit = arguments.shift();
    let size = arguments.shift();
    let quantity = Number(arguments.shift());

    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (size == "big") {
                price = quantity * 28.70 * 5;
            } else if (size == "small") {
                price = quantity * 56 * 2;
            }
            break;
            case "Mango":
            if (size == "big") {
                price = quantity * 19.60 * 5;
            } else if (size == "small") {
                price = quantity * 36.66 * 2;
            }
            break;
        case "Pineapple":
            if (size == "big") {
                price = quantity * 24.80 * 5;
            } else if (size == "small") {
                price = quantity * 42.10 * 2;
            }
            break;
        case "Raspberry":
            if (size == "big") {
                price = quantity * 15.20 * 5;
            } else if (size == "small") {
                price = quantity * 20 * 2;
            }
            break;
    }

    if (price >= 400 && price <= 1000) {
        price = price - (price * 0.15);
    } else if (price > 1000) {
        price = price - (price * 0.50);
    }

    console.log(`${price.toFixed(2)} lv.`);
}

energyGels(["Watermelon", "big", 4]);