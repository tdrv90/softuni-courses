function fanShop(arguments) {
    let budget = Number(arguments.shift());
    let qty = Number(arguments.shift());

    let spend = 0;
    let diff = 0;
    let bought = 0;
    for (let i = 0; i <= qty; i++) {
        let article = arguments.shift();

        switch (article) {
            case "hoodie": spend += 30; bought++; break;
            case "keychain": spend += 4; bought++; break;
            case "T-shirt": spend += 20; bought++; break;
            case "flag": spend += 15; bought++; break;
            case "sticker": spend += 1; bought++; break;
        }
        // if (spend > budget) {
        //     break;
        // }

    }
    diff = spend - budget;

    if (spend > budget) {
        console.log(`Not enough money, you need ${Math.abs(diff)} more lv.`)
    } else {
        console.log(`You bought ${bought} items and left with ${Math.abs(diff)} lv.`);
    }
}

fanShop([25, 3, "flag", "keychain", "sticker"]);
fanShop([5, 2, "hoodie", "hoodie"]);