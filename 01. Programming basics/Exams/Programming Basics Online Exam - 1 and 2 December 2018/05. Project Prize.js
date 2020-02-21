function projectPrize (arguments) {
    let stages = Number(arguments.shift());
    let prizePerPoint = Number(arguments.shift());

    let sum = 0;

    for (var i = 0; i <= stages -1; i++) {
        let points = Number(arguments[i]);

        if (i % 2 != 0) {
            sum += points * 2;
        } else {
            sum += points;
        }
    }

    let total = sum * prizePerPoint;
    console.log(`The project prize was ${total.toFixed(2)} lv.`);
}

projectPrize([7, 100.5, 2, 4, 5, 1, 1, 7, 3]);