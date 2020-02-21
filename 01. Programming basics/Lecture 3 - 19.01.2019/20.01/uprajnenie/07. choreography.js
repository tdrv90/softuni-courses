function choreography (arguments) {
    //input
    let steps = Number(arguments.shift());
    let dancers = Number(arguments.shift());
    let days = Number(arguments.shift());
    
    //calculations
    let percentageStepsDay = Math.ceil((steps / days) / steps * 100);
    let stepsPerDancerPerDay = percentageStepsDay / dancers;

    if (percentageStepsDay <= 13) {
        console.log(`Yes, they will succeed in that goal! ${stepsPerDancerPerDay.toFixed(2)}%.`);
    } else {
        console.log(`No, they will not succeed in that goal! Required ${stepsPerDancerPerDay.toFixed(2)}% steps to be learned per day.`);
    }
}


choreography([10464,20, 20]);
choreography([55555, 30, 7]);