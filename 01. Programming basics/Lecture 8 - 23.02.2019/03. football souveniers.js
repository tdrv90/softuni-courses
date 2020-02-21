function footballSouveniers(arguments) {
    let team = arguments.shift();
    let type = arguments.shift();
    let quantity = Number(arguments.shift());
    let total = 0;
    let isInvalid = false;

    switch (team) {
        case "Argentina":
            switch (type) {
                case "flags": total = quantity * 3.25; break;
                case "caps": total = quantity * 7.20; break;
                case "posters": total = quantity * 5.10; break;
                case "stickers": total = quantity * 1.25; break;
                default:
                    isInvalid = true;
                    console.log(`Invalid stock!`); break;
            }
            break;
        case "Brazil":
            switch (type) {
                case "flags": total = quantity * 4.20; break;
                case "caps": total = quantity * 8.50; break;
                case "posters": total = quantity * 5.35; break;
                case "stickers": total = quantity * 1.20; break;
                default:
                    isInvalid = true;
                    console.log(`Invalid stock!`);
                    break;
            }
            break;
        case "Croatia":
            switch (type) {
                case "flags": total = quantity * 2.75; break;
                case "caps": total = quantity * 6.90; break;
                case "posters": total = quantity * 4.95; break;
                case "stickers": total = quantity * 1.10; break;
                default:
                    isInvalid = true;
                    console.log(`Invalid stock!`);
                    break;
            }
            break;
        case "Denmark":
            switch (type) {
                case "flags": total = quantity * 3.10; break;
                case "caps": total = quantity * 6.50; break;
                case "posters": total = quantity * 4.80; break;
                case "stickers": total = quantity * 0.90; break;
                default:
                    isInvalid = true;
                    console.log(`Invalid stock!`);
                    break;
            }
            break;
        default:
            isInvalid = true;
            console.log(`Invalid country!`);
            break;
    }
    if (!isInvalid) {
        console.log(`Pepi bought ${quantity} ${type} of ${team} for ${total.toFixed(2)} lv.`);
    }
}

footballSouveniers(["Brazil", "stickers", 5]);
footballSouveniers(["Denmark", "caps", "8"]);
footballSouveniers(["USA", "caps", "18"]);
footballSouveniers(["Argentina", "shirts", 35]);