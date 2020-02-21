function journey(arguments) {
    let budget = Number(arguments.shift());
    let season = arguments.shift();

    let location;
    let where;
    let expense;

    if (budget <= 100) {
        location = "Bulgaria";
        if (season == "summer") {
            expense = budget * 0.30;
            where = "Camp";
        } else if (season == "winter") {
            expense = budget * 0.70;
            where = "Hotel";
        }
    } else if (budget <= 1000) {
        location = "Balkans";
        if (season == "summer") {
            expense = budget * 0.40;
            where = "Camp";
        } else if (season == "winter") {
            expense = budget * 0.80;
            where = "Hotel";
        }

    } else {
        location = "Europe";
        where = "Hotel";
        expense = budget * 0.90;
    }

    console.log(`Somewhere in ${location}`);
    console.log(`${where} - ${expense.toFixed(2)}`);
}

journey([50, "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);