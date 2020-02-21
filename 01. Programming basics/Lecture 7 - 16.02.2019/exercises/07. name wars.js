function nameWars(arguments) {
    let name = arguments.shift();
    let winnerName = "";
    let winnerScore = Number.MIN_SAFE_INTEGER;

    while (name != "STOP") {
        let currentScore = 0;
        for (let i = 0; i < name.length; i++) {
            currentScore += name.charCodeAt(i);
        }
        if (currentScore > winnerScore) {
            winnerScore = currentScore;
            winnerName = name;
        }
        name = arguments.shift();
    }
    console.log(`Winner is ${winnerName} - ${winnerScore}!`)
}

nameWars(["Petar", "Georgi", "Stanimir", "STOP"]);