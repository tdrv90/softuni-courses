function projectPrize(arguments) {
    let stages = Number(arguments.shift());
    let prizeFor1Point = Number(arguments.shift());

    let totalPoints = 0;

    for (let i = 0; i <= stages - 1; i++) {
        let stagePoints = Number(arguments[i]);
        if (i % 2 != 0) {
            totalPoints += stagePoints * 2;
        } else {
            totalPoints += stagePoints;
        }
    }
    let totalPrize = totalPoints * prizeFor1Point;
    console.log(`The project prize was ${totalPrize.toFixed(2)} lv.`);
}

projectPrize([7, 100.5, 2, 4, 5, 1, 1, 7, 3]);