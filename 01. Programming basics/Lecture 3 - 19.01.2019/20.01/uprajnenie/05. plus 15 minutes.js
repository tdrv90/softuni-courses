function add15(arguments) {
    let startHour = Number(arguments.shift());
    let startMinutes = Number(arguments.shift());

    let timeInMinutes = startHour * 60 + startMinutes;

    timeInMinutes += 15;

    let finalHour = Math.floor(timeInMinutes / 60);
    if (finalHour == 24) {
        finalHour -= 24;
    }

    let finalMinutes = timeInMinutes % 60;

    if (finalMinutes < 10) {
        console.log(`${finalHour}:0${finalMinutes}`);
    } else {
        console.log(`${finalHour}:${finalMinutes}`);
    }

}


add15([1, 46]);
add15([0, 01]);
add15([23, 59]);
add15([11, 08]);
add15([12, 49]);