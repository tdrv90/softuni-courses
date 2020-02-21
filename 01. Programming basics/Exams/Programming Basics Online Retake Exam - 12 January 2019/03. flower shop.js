function flowerShop(arguments) {
    let hrizantemi = Number(arguments[0]);
    let rozi = Number(arguments[1]);
    let laleta = Number(arguments[2]);
    let season = arguments[3];
    let praznik = arguments[4];

    let total = 0;

    switch (season) {
        case "Spring":
            total = (hrizantemi * 2) + (rozi * 4.10) + (laleta * 2.5);
            if (praznik == "Y") {
                total *= 1.15;
            }
            if (laleta > 7) {
                total = total - (total * 0.05);
            }
            break;
        case "Summer":
            total = (hrizantemi * 2) + (rozi * 4.10) + (laleta * 2.5);
            if (praznik == "Y") {
                total *= 1.15;
            }
            break;
        case "Autumn":
            total = (hrizantemi * 3.75) + (rozi * 4.50) + (laleta * 4.15);
            if (praznik == "Y") {
                total *= 1.15;
            }
            break;
        case "Winter":
            total = (hrizantemi * 3.75) + (rozi * 4.50) + (laleta * 4.15);
            if (praznik == "Y") {
                total *= 1.15;
            }
            if (rozi >= 10) {
                total = total - (total * 0.10);
            }
            break;
    }

    if ((hrizantemi + rozi + laleta) > 20) {
        total = total - (total * 0.20);
    }
    total += 2;

    console.log(total.toFixed(2));
}

flowerShop([2, 4, 8, "Spring", "Y"]);
flowerShop([3, 10, 9, "Winter", "N"]);
flowerShop([10, 10, 10, "Autumn", "N"]);