function beerAndChips (arguments) {
    let name = arguments.shift();
    let budget = Number(arguments.shift());
    let beers = Number(arguments.shift());
    let chips = Number(arguments.shift());

    beers *= 1.20;
    chips *= beers * 0.45;
    chips = Math.ceil(chips);

    let moneyNeeded = beers + chips;
    let diff = budget - moneyNeeded;

    if (budget >= moneyNeeded) {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${(Math.abs(diff)).toFixed(2)} more leva!`);
    }
}

beerAndChips(["George", 10, 2, 3]);
beerAndChips(["Valentin", 5, 2, 4]);