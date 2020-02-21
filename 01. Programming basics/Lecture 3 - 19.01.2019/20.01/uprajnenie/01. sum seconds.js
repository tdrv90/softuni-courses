function sumSeconds (arguments) {
    let time1 = Number(arguments.shift());
    let time2 = Number(arguments.shift());
    let time3 = Number(arguments.shift());

    let total = time1 + time2 + time3;

    let minutes = Math.floor(total / 60);
    let seconds = total % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

// sumSeconds([35,45,44]);
sumSeconds([150,510,149]);