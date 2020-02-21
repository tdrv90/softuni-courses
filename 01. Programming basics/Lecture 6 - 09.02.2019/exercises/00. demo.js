function cleverLily(arguments) {
    let age = Number(arguments[0]);
    let washingMachine = Number(arguments[1]);
    let toyPrice = Number(arguments[2]);

    let moneySaved = 0;
    let toyYears = 0;
    let moneyAmount = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyYears++;
        } else {
            moneySaved += (moneyAmount - 1);
            moneyAmount += 10;
        }
    }
    let totalToysPrice = toyYears * toyPrice;

    let totalMoneySaved = totalToysPrice + moneySaved;
    let diff = Math.abs(totalMoneySaved - washingMachine);

    if (totalMoneySaved >= washingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily([10, 170, 6]);
cleverLily([21, 1570.98, 3]);