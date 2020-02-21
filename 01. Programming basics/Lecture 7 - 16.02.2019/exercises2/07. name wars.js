function nameWars(arguments) {
    let name = arguments.shift();

    let winnerName = "";
    let winnerScore = 0;

    while (name != "STOP") {
        let sum = 0;
        for (let i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }
        if (sum > winnerScore) {
            winnerScore = sum;
            winnerName = name;
        }
        name = arguments.shift();
    }
    console.log(`Winner is ${winnerName} - ${winnerScore}!`);
}

nameWars(["Ivo", "Niki", "Valio", "Konstantin", "STOP"]);
nameWars(["Petar", "Georgi", "Stanimir", "STOP"]);  