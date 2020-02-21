function schoolTrip (arguments) {
    let days = Number(arguments.shift());
    let totalFoodLeft = Number(arguments.shift());
    let dog1 = Number(arguments.shift());
    let dog2 = Number(arguments.shift());
    let dog3 = Number(arguments.shift());

    let totalFoodRequired = (dog1 + dog2 + dog3) * days;
    let diff = totalFoodLeft - totalFoodRequired;

    if (totalFoodLeft >= totalFoodRequired) {
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        console.log(`${Math.abs(Math.floor(diff))} more kilos are needed.`)
    }
}

schoolTrip([2, 10, 1,1,2]);
schoolTrip([5, 10, 2.1, 0.8, 11]);
schoolTrip([1, 5, 3, 1, 1]);