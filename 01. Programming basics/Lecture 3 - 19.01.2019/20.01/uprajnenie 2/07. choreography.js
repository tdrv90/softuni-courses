function choreographyTime(arguments) {
    let steps = Number(arguments.shift());
    let dancers = Number(arguments.shift());
    let days = Number(arguments.shift());

    let percentStepsPerDay = Math.ceil(((steps / days) / steps) * 100);
    let percentStepsPerDancers = percentStepsPerDay / dancers;

    if (percentStepsPerDay <= 13) {
        console.log(`Yes, they will succeed in that goal! ${percentStepsPerDancers.toFixed(2)}%.`)
    } else {
        console.log(`No, they will not succeed in that goal! Required ${percentStepsPerDancers.toFixed(2)}% steps to be learned per day.`)
    }

}

choreographyTime([10464, 20, 20]);
choreographyTime([55555, 30, 7]);