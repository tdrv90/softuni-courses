function garageCleaning (arguments) {
    let time1 = Number(arguments.shift());
    let time2 = Number(arguments.shift());
    let time3 = Number(arguments.shift());
    let fishingTime = Number(arguments.shift());

    //calculations
    let cleaningTime = 1 / (1/time1 + 1/time2 + 1/time3);
    cleaningTime *= 1.15;
    let difference = fishingTime - cleaningTime;
    let result;

    if (difference > 0) {
        result = `Yes, there is a surprise - time left -> ${Math.floor(difference)} hours.`;
    } else if (difference < 0) {
        result = `No, there isn't a surprise - shortage of time -> ${Math.abs(Math.floor(difference))} hours.`
    }

    // output
    console.log(`Cleaning time: ${cleaningTime.toFixed(2)}`)
    console.log(result);
}


// garageCleaning([3,4,5,3.6])
garageCleaning([3.2, 2.5, 1.24, 0.5])