function coffeeMachine(input) {
    let totalIncome = 0;

    input.forEach(element => {
        let order = element.split(", ");

        const coins = Number(order[0]);
        const beverage = order[1];
        const hasMilk = order.includes("milk");
        const sugar = Number(order[order.length - 1]);
        let price = 0.80; // price for coffee with caffeine or tea

        if (beverage === "coffee" && order.includes("decaf")) {
            price = 0.90;
        }
        if (hasMilk) {
            price *= 1.10;
            price = Number(price.toFixed(1));
        }
        if (sugar > 0) {
            price += 0.10;
        }

        if (coins >= price) {
            let change = coins - price;
            totalIncome += price;

            console.log(`You ordered ${beverage}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
        } else if (coins < price) {
            let moneyNeeded = price - coins;
            console.log(`Not enough money for ${beverage}. Need $${moneyNeeded.toFixed(2)} more.`);
        }
    });

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

coffeeMachine([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
]);
// You ordered coffee. Price: $1.00 Change: $0.00
// Not enough money for tea. Need $0.60 more.
// You ordered coffee. Price: $0.90 Change: $0.10
// Income Report: $1.90

coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);
// You ordered coffee. Price: $1.00 Change: $7.00
// You ordered tea. Price: $0.90 Change: $0.10
// Income Report: $1.90