function bestPlayer(arguments) {
    let command = arguments.shift();

    let winnerName = "";
    let winnerGoals = 0;

    while (command != "END") {
        let goals = Number(arguments.shift());

        if (goals > winnerGoals) {
            winnerGoals = goals;
            winnerName = command;
        }

        if (goals >= 10) {
            break;
        }
        command = arguments.shift();
    }

    console.log(`${winnerName} is the best player!`);
    if (winnerGoals < 3) {
        console.log(`He has scored ${winnerGoals} goals.`)
    } else {
        console.log(`He has scored ${winnerGoals} goals and made a hat-trick !!!`);
    }
}

// bestPlayer(["Neymar", 2, "Ronaldo", 1, "Messi", 3, "END"]);
// bestPlayer(["Silva", 5, "Harry Kane", 10]);
// bestPlayer(["Rooney", 1, "Junior", 2, "Paolinio", 2, "END"]);
bestPlayer(["Zidane", 1, "Felipe", 2, "Johnson", 4, "END"]);