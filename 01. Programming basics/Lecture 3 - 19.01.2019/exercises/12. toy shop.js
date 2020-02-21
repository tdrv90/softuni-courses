function toyShop (arguments) {
    let holidayPrice = Number(arguments.shift());
    let puzzles = Number(arguments.shift());
    let dolls = Number(arguments.shift());
    let bears = Number(arguments.shift());
    let minions = Number(arguments.shift());
    let trucks = Number(arguments.shift());
    let discount = 0.0;

    let revenue = (puzzles * 2.60) + (dolls * 3.00) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let toysCount = puzzles + dolls + bears + minions + trucks;

    if (toysCount >= 50) {
        discount = revenue * 0.25;
    }

    revenue = revenue - discount;
    let rent = revenue * 0.10;
    let moneyLeft = revenue - rent;
    let holidayMoneyLeft = moneyLeft - holidayPrice;

    if (moneyLeft >= holidayPrice) {
        let result = moneyLeft - holidayPrice;
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    } else {
        let result = Math.abs(holidayPrice - moneyLeft);
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`);
    }


}

// toyShop([40.80, 20, 25, 30, 50, 10]);
toyShop([320, 8, 2, 5, 5, 1]);