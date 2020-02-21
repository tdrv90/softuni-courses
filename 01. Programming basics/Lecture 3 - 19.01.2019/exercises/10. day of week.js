function dayOfWeek (arguments) {
    let day = Number(arguments.shift());
    let answer = "Error";

    switch (day) {
        case 1:
            answer = "Monday";
            break;
        case 2:
            answer = "Tuesday";
            break;
        case 3:
            answer = "Wednesday";
            break;
        case 4:
            answer = "Thursday";
            break;
        case 5:
            answer = "Friday";
            break;
        case 6:
            answer = "Saturday";
            break;
        case 7:
            answer = "Sunday";
    }

    console.log(answer);
}

dayOfWeek([1]);
dayOfWeek([2]);
dayOfWeek([3]);
dayOfWeek([4]);
dayOfWeek([5]);
dayOfWeek([6]);
dayOfWeek([7]);
dayOfWeek([8]);