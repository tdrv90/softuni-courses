function footballScores(arguments) {
    let match1 = arguments.shift();
    let match2 = arguments.shift();
    let match3 = arguments.shift();

    let won = 0;
    let lost = 0;
    let drawn = 0;

    if (match1[0] > match1[2]) {
        won++;
    } else if (match1[0] < match1[2]) {
        lost++;
    } else if (match1[0] == match1[2]) {
        drawn++;
    }
    if (match2[0] > match2[2]) {
        won++;
    } else if (match2[0] < match2[2]) {
        lost++;
    } else if (match2[0] == match2[2]) {
        drawn++;
    }
    if (match3[0] > match3[2]) {
        won++;
    } else if (match3[0] < match3[2]) {
        lost++;
    } else if (match3[0] == match3[2]) {
        drawn++;
    }

    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawn}`);
}

footballScores(["3:1", "0:2", "0:0"]);
footballScores(["4:2", "0:3", "1:0"]);
footballScores(["0:2", "0:1", "3:3"]);