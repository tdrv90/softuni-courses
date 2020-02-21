function weddingGifts(arguments) {
    let guests = Number(arguments.shift());
    let gifts = Number(arguments.shift());

    let money = 0;
    let appliances = 0;
    let vouchers = 0;
    let others = 0;
    let guestsWithGifts = 0;

    for (let i = 0; i <= gifts; i++) {
        let type = arguments.shift();

        switch (type) {
            case "A": money++; break;
            case "V": vouchers++; break;
            case "G": others++; break;
            case "B": appliances++; break;
        }
    }

    console.log(`${(money / gifts * 100).toFixed(2)}%`);
    console.log(`${(appliances / gifts * 100).toFixed(2)}%`);
    console.log(`${(vouchers / gifts * 100).toFixed(2)}%`);
    console.log(`${(others / gifts * 100).toFixed(2)}%`);
    console.log(`${(gifts / guests * 100).toFixed(2)}%`);
}

// weddingGifts([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])
// weddingGifts([93, 16, "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
weddingGifts([1000, 12, "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);