function gameInfo(arguments) {
    let team = arguments.shift();
    let matches = Number(arguments.shift());

    let total = 0;
    let matchesWithPenalties = 0;
    let matcheswithAdditionalTime = 0;

    for (let i = 1; i <= matches; i++) {
        let minutes = Number(arguments.shift());
        if (minutes > 90 && minutes <= 120) {
            matcheswithAdditionalTime++;
        } else if (minutes > 120) {
            matchesWithPenalties++;
        }
        total += minutes;
    }

    let average = total / matches;

    console.log(`${team} has played ${total} minutes. Average minutes per game: ${average.toFixed(2)}`);
    console.log(`Games with penalties: ${matchesWithPenalties}`);
    console.log(`Games with additional time: ${matcheswithAdditionalTime}`);
}

// gameInfo(["England", 3, 95, 115, 123]);
// gameInfo(["Croatia", 4, 93, 90, 120, 125]);
gameInfo(["Brazil", 2, 96, 115]);