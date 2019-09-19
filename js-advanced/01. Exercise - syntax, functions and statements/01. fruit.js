function moneyForFruit(fruit, weight, price) {
    let money = price * weight / 1000;

    return `I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`;
}

console.log(moneyForFruit('orange', 2500, 1.80));
console.log(moneyForFruit('apple', 1563, 2.35));