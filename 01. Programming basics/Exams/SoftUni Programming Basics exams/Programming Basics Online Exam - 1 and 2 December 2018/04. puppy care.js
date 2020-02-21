function puppyCare(arguments) {
    let foodBought = Number(arguments.shift());
    foodBought *= 1000;

    let command = arguments.shift();
    let totalFoodEaten = 0;

    while (command != "Adopted") {
        let foodForTheDay = Number(command);
        totalFoodEaten += foodForTheDay;

        command = arguments.shift();
    }
    let diff = foodBought - totalFoodEaten;

    if (totalFoodEaten <= foodBought) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(diff)} grams more.`)
    }
}

puppyCare([4, 130, 345, 400, 180, 230, 120, "Adopted"]);
puppyCare([3, 1000, 1000, 1000, "Adopted"]);
puppyCare([2, 999, 456, 999, 999, 123, 456, "Adopted"]);