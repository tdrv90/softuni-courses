function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500);

    let time = Math.ceil(distance / (speed / 60 * 1000) * 60); // calculate time in seconds
    time += breaks * 60; // calculate breaks in seconds


    // calculte hours, minutes and seconds
    let [hours, minutes, seconds] = [0, 0, 0];

    while (time >= 3600) {
        time -= 3600;
        hours++;
    }
    while (time >= 60) {
        time -= 60;
        minutes++;
    }
    seconds = time;

    // add 0 digit infront of each in case they are less than 10 (i.e. 8 hours = 08 hours)
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
}


console.log(timeToWalk(4000, 0.60, 5));
// 00:32:48
console.log(timeToWalk(2564, 0.70, 5.5));
// 00:22:35