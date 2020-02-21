function pastryShop(arguments) {
    let type = arguments.shift().toLowerCase();
    let number = Number(arguments.shift());
    let date = Number(arguments.shift());

    switch (type) {
        case "cake":
            if (date <= 15) {
                let cakeTotal = number * 24;
                if (cakeTotal < 100) {
                    let sumWithDateDiscount = cakeTotal - cakeTotal * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                } else if (cakeTotal <= 200) {
                    let sumWithDiscount = cakeTotal - cakeTotal * 0.15;
                    let sumWithDateDiscount = sumWithDiscount - sumWithDiscount * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                } else {
                    let sumWithDiscount = cakeTotal - cakeTotal * 0.25;
                    let sumWithDateDiscount = sumWithDiscount - sumWithDiscount * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                }
            } else if (date <= 22) {
                let cakeTotal = number * 28.70;
                if (cakeTotal < 100) {
                    console.log(cakeTotal.toFixed(2));
                } else if (cakeTotal <= 200) {
                    let sumWithDiscount = cakeTotal - cakeTotal * 0.15;
                    console.log(sumWithDiscount.toFixed(2));
                } else {
                    let sumWithDiscount = cakeTotal - cakeTotal * 0.25;
                    console.log(sumWithDiscount.toFixed(2));
                }
            } else {
                let cakeTotal = number * 28.70;
                console.log(cakeTotal.toFixed(2));
            }
            break;
        case "souffle":
            if (date <= 15) {
                let souffleTotal = number * 6.66;
                if (souffleTotal < 100) {
                    let sumWithDateDiscount = souffleTotal - souffleTotal * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                } else if (souffleTotal <= 200) {
                    let sumWithDiscount = souffleTotal - souffleTotal * 0.15;
                    let sumWithDateDiscount = sumWithDiscount - sumWithDiscount * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                } else {
                    let sumWithDiscount = souffleTotal - souffleTotal * 0.25;
                    let sumWithDateDiscount = sumWithDiscount - sumWithDiscount * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                }
            } else if (date <= 22) {
                let souffleTotal = number * 9.80;
                if (souffleTotal < 100) {
                    console.log(souffleTotal.toFixed(2));
                } else if (souffleTotal <= 200) {
                    let sumWithDiscount = souffleTotal - souffleTotal * 0.15;
                    console.log(sumWithDiscount.toFixed(2));
                } else {
                    let sumWithDiscount = souffleTotal - souffleTotal * 0.25;
                    console.log(sumWithDiscount.toFixed(2));
                }
            } else {
                let souffleTotal = number * 9.80;
                console.log(souffleTotal.toFixed(2));
            }
            break;
        case "baklava":
            if (date <= 15) {
                let baklavaTotal = number * 12.60;
                if (baklavaTotal < 100) {
                    let sumWithDateDiscount = baklavaTotal - baklavaTotal * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                } else if (baklavaTotal <= 200) {
                    let sumWithDiscount = baklavaTotal - baklavaTotal * 0.15;
                    let sumWithDateDiscount = sumWithDiscount - sumWithDiscount * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                } else {
                    let sumWithDiscount = baklavaTotal - baklavaTotal * 0.25;
                    let sumWithDateDiscount = sumWithDiscount - sumWithDiscount * 0.10;
                    console.log(sumWithDateDiscount.toFixed(2));
                }
            } else if (date <= 22) {
                let baklavaTotal = number * 16.98;
                if (baklavaTotal < 100) {
                    console.log(baklavaTotal.toFixed(2));
                } else if (baklavaTotal <= 200) {
                    let sumWithDiscount = baklavaTotal - baklavaTotal * 0.15;
                    console.log(sumWithDiscount.toFixed(2));
                } else {
                    let sumWithDiscount = baklavaTotal - baklavaTotal * 0.25;
                    console.log(sumWithDiscount.toFixed(2));
                }
            } else {
                let baklavaTotal = number * 16.98;
                console.log(baklavaTotal.toFixed(2));
            }
            break;
    }
}

pastryShop(["cake", "10", "15"]);
pastryShop(["souffle", "20", "24"]);
pastryShop(["baklava", "50", "1"]);
pastryShop(["cake", "5", "12"]);