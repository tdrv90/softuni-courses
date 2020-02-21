function smartLily(arguments) {
    let age = Number(arguments[0]);
    let washingMachinePrice = Number(arguments[1]);
    let toyPrice = Number(arguments[2]);

    let moneyYears = 0;
    let toyYears = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneyYears++;
        } else {
            toyYears++;
        }
    }
    let money = 0;
    for (let i = 1; i <= moneyYears; i++) {
        money += 10 * i;
    }

    money += (toyYears * toyPrice) - moneyYears;

    let diff = Math.abs(washingMachinePrice - money);

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}


smartLily([10, 170, 6]);
smartLily([21, 1570.98, 3]);
smartLily([77, 1570.98, 325]);