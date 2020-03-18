function fruit(typeOfFruit, weight, price) {
    let moneyNeeded = (Number(weight) / 1000 * price).toFixed(2);
    let weightInKgs = (Number(weight) / 1000).toFixed(2)

    return `I need $${moneyNeeded} to buy ${weightInKgs} kilograms ${typeOfFruit}.`;
}

console.log(fruit('orange', 2500, 1.80)); // I need $4.50 to buy 2.50 kilograms orange.