function add15(arguments) {
    let entryHours = Number(arguments.shift());
    let entryMinutes = Number(arguments.shift());

    let timeInMins = entryHours * 60 + entryMinutes;
    let timePlus15 = timeInMins + 15;

    let exitHours = Math.floor(timePlus15 / 60);
    let exitMinutes = timePlus15 % 60;

    if (exitHours >= 24) {
        exitHours -= 24;
    }

    if (exitMinutes < 10) {
        console.log(`${exitHours}:0${exitMinutes}`);
    } else {
        console.log(`${exitHours}:${exitMinutes}`);
    }
}


add15([1, 46]);
add15([0, 01]);
add15([23, 59]);
add15([11, 08]);
add15([12, 49]);