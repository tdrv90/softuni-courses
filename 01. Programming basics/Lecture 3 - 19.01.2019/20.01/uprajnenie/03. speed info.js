function speedInfo (arguments) {
    let speed = Number(arguments.shift());
    let output = "extremely fast";

    if (speed <= 10) {
        output = "slow";
    } else if (speed <= 50) {
        output = "average";
    } else if (speed <= 150) {
        output = "fast";
    } else if (speed <= 1000) {
        output = "ultra fast";
    }

    console.log(output);
}

speedInfo([8]);
speedInfo([49.50]);
speedInfo([126]);
speedInfo([160]);
speedInfo([3500]);