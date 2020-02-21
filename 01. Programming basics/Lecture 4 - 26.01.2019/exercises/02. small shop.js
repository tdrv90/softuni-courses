function smallShop(arguments) {
    let product = arguments.shift().toLowerCase();
    let city = arguments.shift().toLowerCase();
    let quantity = arguments.shift();

    switch (product) {
        case "coffee":
            if (city == "sofia") {
                console.log(quantity * 0.50);
            } else if (city == "plovdiv") {
                console.log(quantity * 0.40);
            } else if (city == "varna") {
                console.log(quantity * 0.45);
            }
            break;
        case "water":
            if (city == "sofia") {
                console.log(quantity * 0.80);
            } else if (city == "plovdiv") {
                console.log(quantity * 0.70);
            } else if (city == "varna") {
                console.log(quantity * 0.70);
            }
            break;
        case "beer":
            if (city == "sofia") {
                console.log(quantity * 1.20);
            } else if (city == "plovdiv") {
                console.log(quantity * 1.15);
            } else if (city == "varna") {
                console.log(quantity * 1.10);
            }
            break;
        case "sweets":
            if (city == "sofia") {
                console.log(quantity * 1.45);
            } else if (city == "plovdiv") {
                console.log(quantity * 1.30);
            } else if (city == "varna") {
                console.log(quantity * 1.35);
            }
            break;
        case "peanuts":
            if (city == "sofia") {
                console.log(quantity * 1.60);
            } else if (city == "plovdiv") {
                console.log(quantity * 1.50);
            } else if (city == "varna") {
                console.log(quantity * 1.55);
            }
            break;
    }
}

smallShop(["coffee", "varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);