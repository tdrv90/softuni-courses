function tennisRankList(arguments) {
    let tournaments = Number(arguments.shift());
    let points = Number(arguments.shift());

    let average = 0;
    let won = 0;


    for (i = 1; i <= tournaments; i++) {
        let stage = arguments.shift();

        if (stage == "W") {
            points += 2000;
            average += 2000;
            won++;
        } else if (stage == "F") {
            points += 1200;
            average += 1200;
        } else if (stage == "SF") {
            points += 720;
            average += 720;
        }
    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(average / tournaments)}`);
    console.log(`${(won / tournaments * 100).toFixed(2)}%`);
}

tennisRankList([5, 1400, "F", "SF", "W", "W", "SF"]);
tennisRankList([4, 750, "SF", "W", "SF", "W"]);
tennisRankList([7, 1200, "SF", "F", "W", "F", "W", "SF", "W"]);