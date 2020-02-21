function speedInfo(arguments) {
    let speed = Number(arguments.shift());
    let result;

    if (speed > 1000) {
        result = "extremely fast";
    } else if (speed > 150) {
        result = "ultra fast";
    } else if (speed > 50) {
        result = "fast";
    } else if (speed > 10) {
        result = "average";
    } else {
        result = "slow";
    }

    console.log(result);

}

speedInfo([8]);
speedInfo([49.50]);
speedInfo([126]);
speedInfo([160]);
speedInfo([3500]);