function garageCleaning(arguments) {
    let timeBro1 = Number(arguments.shift());
    let timeBro2 = Number(arguments.shift());
    let timeBro3 = Number(arguments.shift());
    let timeFishing = Number(arguments.shift());

    let totalTime = (1 / (1 / timeBro1 + 1 /timeBro2 + 1/timeBro3)) * 1.15;
    let timeLeft = timeFishing - totalTime;

    console.log(`Cleaning time: ${totalTime.toFixed(2)}`);

    if (timeLeft >= 0) {
        console.log(`Yes, there is a surprise - time left -> ${Math.floor(timeLeft)} hours.`);
    }   else {
        console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(Math.abs(timeLeft))} hours.`)
    }
}

garageCleaning([3,4,5, 3.6]);
garageCleaning([3.2, 2.5, 1.24, 0.5]);