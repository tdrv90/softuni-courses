function weddingDecorations(arguments) {
    let budget = Number(arguments.shift());

    let command = arguments.shift();

    let countBalloons = 0;
    let countRibbon = 0;
    let countFlowers = 0;
    let countCandles = 0;
    let totalMoneySpend = 0;
    
    while (command != "stop") {
        let quantity = Number(arguments.shift());
        let moneySpend = 0;
        
        switch (command) {
            case "balloons":
                moneySpend += quantity * 0.10;
                countBalloons += quantity;
                break;
            case "flowers":
                moneySpend += quantity * 1.50;
                countFlowers += quantity;
                break;
            case "candles":
                moneySpend += quantity * 0.50;
                countCandles += quantity;
                break;
            case "ribbon":
                moneySpend += quantity * 2.00;
                countRibbon += quantity;
                break;
        }
        
        totalMoneySpend += moneySpend;
        if (totalMoneySpend > budget) {
            console.log(`All money is spent!`);
            break;
        }

        command = arguments.shift();
    }
    let diff = budget - totalMoneySpend;

    if (budget > totalMoneySpend) {
        console.log(`Spend money: ${totalMoneySpend.toFixed(2)}`);
        console.log(`Money left: ${diff.toFixed(2)}`);
    }
    console.log(`Purchased decoration is ${countBalloons} balloons, ${countRibbon} m ribbon, ${countFlowers} flowers and ${countCandles} candles.`);
}

weddingDecorations([30, "flowers", 10, "balloons", 20, "candles", 10, "ribbon", 8]);
weddingDecorations([365.50, "flowers", 15, "balloons", 10, "candles", 5, "ribbon", 6, "ribbon", 4, "balloons", 15, "candles", 9, "stop"]);
weddingDecorations([500, "balloons", 30, "candles", 20, "flowers", 100, "ribbon", 20, "stop"]);