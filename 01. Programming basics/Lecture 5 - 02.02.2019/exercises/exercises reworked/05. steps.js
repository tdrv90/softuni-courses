function stepsGabi(arguments) {
    let steps = 0;

    while (steps < 10000) {
        let command = arguments.shift();
        if (command == "Going home") {
            steps += Number(arguments.shift());
            if (steps >= 10000) {
                console.log(`Goal reached! Good job!`);
            } else {
                let diff = 10000 - steps;
                console.log(`${diff} more steps to reach goal.`)
            }
            break;
        } else {
            steps += Number(command);
            if (steps >= 10000) {
                console.log(`Goal reached! Good job!`);
            }
        }
    }
}

stepsGabi([]);