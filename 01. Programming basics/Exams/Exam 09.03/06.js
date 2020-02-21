function basketballTournament(arguments) {
    let tournamentName = arguments.shift();

    let winsCounter = 0;
    let losesCounter = 0;
    let totalMatches = 0;

    while (tournamentName != "End of tournaments") {
        let numberOfMatches = Number(arguments.shift());
        for (let i = 1; i <= numberOfMatches; i++) {
            let team1points = Number(arguments.shift());
            let team2points = Number(arguments.shift());

            if (team1points > team2points) {
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${team1points - team2points} points.`);
                winsCounter++;
                totalMatches++;
            } else if (team2points > team1points) {
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${team2points - team1points} points.`);
                losesCounter++;
                totalMatches++;
            }
        }
        tournamentName = arguments.shift();
    }

    console.log(`${(winsCounter / totalMatches * 100).toFixed(2)}% matches win`);
    console.log(`${(losesCounter / totalMatches * 100).toFixed(2)}% matches lost`);
}

// basketballTournament(["Dunkers", 2, 75, 65, 56, 73, "Fire Girls", 3, 67, 34, 83, 98, 66, 45, "End of tournaments"])
basketballTournament(["Ballers", 3, 87, 63, 56, 65, 75, 64, "Sharks", 4, 64, 76, 65, 86, 68, 99, 45, 78, "End of tournaments"])