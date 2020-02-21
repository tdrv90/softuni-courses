function goingHome (arguments) {
    let distance = Number(arguments.shift());
    let expense100km = Number(arguments.shift());
    let gasPrice = Number(arguments.shift());
    let tournamentPrize = Number(arguments.shift());

    let moneyNeeded = (distance * expense100km / 100) * gasPrice;
    let diff = (tournamentPrize - moneyNeeded);
    let share = tournamentPrize / 5;

    if (diff >= 0) {
        console.log(`You can go home. ${diff.toFixed(2)} money left.`);
    } else {
        console.log(`Sorry, you cannot go home. Each will receive ${share.toFixed(2)} money.`)
    }
}

goingHome([100, 5, 1.20, 6]);
goingHome([120, 5, 1.2, 4]);
goingHome([100, 8, 1.2, 20]);