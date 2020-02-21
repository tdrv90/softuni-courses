function onTimeForTheExam(arguments) {
    let examHour = Number(arguments.shift());
    let examMinutes = Number(arguments.shift());
    let arrivalHour = Number(arguments.shift());
    let arrivalMinutes = Number(arguments.shift());

    let examTotalMinutes = examHour * 60 + examMinutes;
    let arrivalTotalminutes = arrivalHour * 60 + arrivalMinutes;
    let differenceInMinutes = arrivalTotalminutes - examTotalMinutes;

    if (differenceInMinutes < -30) {
        console.log(`Early`);
        differenceInMinutes = Math.abs(differenceInMinutes);
        if (differenceInMinutes < 60) {
            console.log(`${differenceInMinutes} minutes before the start`);
        } else {
            if (differenceInMinutes % 60 < 10) {
                console.log(`${Math.floor(differenceInMinutes / 60)}:0${differenceInMinutes % 60} hours before the start`);
            } else {
                console.log(`${Math.floor(differenceInMinutes / 60)}:${differenceInMinutes % 60} hours before the start`);
            }
        }
    } else if (differenceInMinutes >= -30 && differenceInMinutes <= 0) {
        console.log(`On time`);
        differenceInMinutes = Math.abs(differenceInMinutes);
        if (differenceInMinutes > 0 && differenceInMinutes <= 30) {
            console.log(`${differenceInMinutes % 60} minutes before the start`)
        }
    } else if (differenceInMinutes > 0) {
        console.log(`Late`);
        if (differenceInMinutes < 60) {
            console.log(`${differenceInMinutes} minutes after the start`);
        } else {
            if (differenceInMinutes % 60 < 10) {
                console.log(`${Math.floor(differenceInMinutes / 60)}:0${differenceInMinutes % 60} hours after the start`);
            } else {
                console.log(`${Math.floor(differenceInMinutes / 60)}:${differenceInMinutes % 60} hours after the start`);
            }
        }
    }
}

onTimeForTheExam([10, 0, 9, 30]);