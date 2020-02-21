function foodOrder(arguments) {
    let budget = Number(arguments.shift());
    let productName = arguments.shift();
    let productPrice = Number(arguments.shift());

    let total = 2.50;
    let productCounter = 0;

    while (productName != "Order") {
        total += productPrice;
        productCounter++;

        if (total > budget) {
            console.log(`You will exceed the budget if you order this!`);
            total -= productPrice;
            productCounter--;
        }
        productName = arguments.shift();
        productPrice = Number(arguments.shift());
    }

    console.log(`You ordered ${productCounter} items!`);
    console.log(`Total: ${total.toFixed(2)}`);
}


foodOrder([25.00, "Soup", 3.50, "Salad", 7.80, "Fish", 9.00, "Cake", 5.00, "Ice cream", 2.00, "Order"]);
foodOrder([30, "Salad", 5.50, "Steak", 7.90, "Potatoes", 4.50, "Order"]);
foodOrder([15, "Salad", 7.50, "Pizza", 10.00, "Soup", 3.00, "Cheesecake", 5.60, "Ice cream", 1.00, "Order"]);