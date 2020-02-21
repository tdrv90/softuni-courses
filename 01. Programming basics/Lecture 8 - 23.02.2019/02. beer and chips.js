function beerAndChips (arguments) {
    let name = arguments.shift();
    let budget = Number(arguments.shift());
    let beers = Number(arguments.shift());
    let chips = Number(arguments.shift());

    beers *= 1.20;
    chips *= 0.45 * beers;
    chips = Math.ceil(chips);

    let total = beers + chips;
    let diff = budget - total;

    if (budget >= total) {
        console.log(`${name} bought a snack and has ${(Math.abs(diff)).toFixed(2)} leva left.`)
    } else {
        console.log(`${name} needs ${(Math.abs(diff)).toFixed(2)} more leva!`)
    }
}

beerAndChips(["George", "10", "2", "3"]);
beerAndChips(["Valentin", 5, 2, 4]);