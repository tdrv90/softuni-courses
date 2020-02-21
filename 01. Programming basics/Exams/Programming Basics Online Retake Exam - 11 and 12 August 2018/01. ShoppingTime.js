function shoppingPeter (arguments) {
    let relaxTime = Number(arguments.shift());
    let hardwarePrice = Number(arguments.shift());
    let softwarePrice = Number(arguments.shift());
    let whiteFrappePrice = Number(arguments.shift());

    let relaxTimeLeft = relaxTime - 15;
    let totalPrice = whiteFrappePrice + (3 * hardwarePrice) + (2 * softwarePrice);

    console.log(totalPrice.toFixed(2));
    console.log(relaxTimeLeft);
}

shoppingPeter([20, 2, 4, 3]);
shoppingPeter([35, 2.50, 1.20, 6.30]);
shoppingPeter([40, 16.66, 35, 4.20]);