function pastryShop(arguments) {
    let pastry = arguments.shift();
    let quantity = Number(arguments.shift());
    let day = Number(arguments.shift());

    let total = 0;

    switch (pastry) {
        case "Cake":
            if (day <= 15) {
                total = quantity * 24;
            } else {
                total = quantity * 28.70;
            }
            if (day <= 22 && total > 100 && total <= 200) {
                total = total - (total * 0.15);
            } else if (day <= 22 && total > 200) {
                total = total - (total * 0.25);
            }

            break;
        case "Souffle":
            if (day <= 15) {
                total = quantity * 6.66;
            } else {
                total = quantity * 9.80;
            }
            if (day <= 22 && total > 100 && total <= 200) {
                total = total - (total * 0.15);
            } else if (day <= 22 && total > 200) {
                total = total - (total * 0.25);
            }

            break;
        case "Baklava":
            if (day <= 15) {
                total = quantity * 12.60;
            } else {
                total = quantity * 16.98;
            }
            if (day <= 22 && total > 100 && total <= 200) {
                total = total - (total * 0.15);
            } else if (day <= 22 && total > 200) {
                total = total - (total * 0.25);
            }

            break;
    }

    if (day <= 15) {
        total = total - (total * 0.10);
    }
    console.log(total.toFixed(2));
}

pastryShop(["Cake", 10, 15]);
pastryShop(["Souffle", 20, 24]);
pastryShop(["Baklava", 50, 1]);
pastryShop(["Cake", 5, 12]); 