function swimmingRecord(arguments) {
    let currentRecord = Number(arguments.shift());
    let distance = Number(arguments.shift());
    let timeFor1Meter = Number(arguments.shift());

    let ivanTime = (distance * timeFor1Meter) + (Math.floor(distance / 15) * 12.5);
    let difference = currentRecord - ivanTime;

    if (difference <= 0) {
        console.log(`No, he failed! He was ${Math.abs(difference).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
    }
}


swimmingRecord([10464, 1500, 20]);
swimmingRecord([55555.67, 3017, 5.03]);