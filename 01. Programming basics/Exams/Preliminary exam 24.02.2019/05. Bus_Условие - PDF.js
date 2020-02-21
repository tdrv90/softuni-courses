function busFunction(arguments) {
    let currentPassengers = Number(arguments.shift());
    let busStops = Number(arguments.shift());

    let countStops = 1;

    for (let i = 1; i <= busStops; i++) {
        let slizashti = Number(arguments.shift());
        let kachvashti = Number(arguments.shift());

        currentPassengers -= slizashti;
        currentPassengers += kachvashti;
        countStops++;
    }

    if (countStops % 2 == 0) {
        currentPassengers += 2;
    }
    console.log(`The final number of passengers is : ${currentPassengers}`);
}


busFunction([20, 2, 10, 5, 5, 3]);
busFunction([25, 5, 14, 15, 9, 11, 10, 13, 6, 7, 10, 8]);
busFunction([17, 3, 6, 7, 8, 9, 3, 4]);

// тук пробвай със стъпка +2 да я решиш после
