function swimmingRecord(arguments) {
    // input
    let currentRecord = Number(arguments.shift());
    let distance = Number(arguments.shift());
    let timePerMeter = Number(arguments.shift());

    let currentResistanceTime = Math.floor(distance / 15) * 12.50;
    let totalTime = (distance * timePerMeter) + currentResistanceTime;
    let difference = Math.abs(totalTime - currentRecord);

    if (totalTime < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}

swimmingRecord([10464, 1500, 20]);
swimmingRecord([55555.67, 3017, 5.03]);