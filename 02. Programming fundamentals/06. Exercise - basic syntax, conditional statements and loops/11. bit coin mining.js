function bitCoinMining(arguments) {

    let bitcoins = 0;
    let money = 0;
    let firstDay = 0;

    for (let i = 0; i <= arguments.length - 1; i++) {
        let gramsMined = 0;
        if ((i + 1) % 3 == 0) {
            gramsMined += arguments[i] * 0.70; // 30% stolen every 3rd day
        } else {
            gramsMined += arguments[i];
        }
        money += gramsMined * 67.51; // price of 1 gram in lv
        
        while (money >= 11949.16) { // price of 1 bitcoin
            money -= 11949.16;
            bitcoins++;
            if (bitcoins == 1) {
                firstDay = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitCoinMining([50, 100]);
// bitCoinMining([3124.15, 504.212, 2511.124]);