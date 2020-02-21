function weddingParty (arguments) {
    let guests = Number(arguments.shift());
    let budget = Number(arguments.shift());

    let totalExpense = guests * 20;
    let diff = budget - totalExpense;

    if (totalExpense > budget) {
        console.log(`They won't have enough money to pay the covert. They will need ${Math.abs(diff).toFixed(0)} lv more.`)
    } else {
        let fireworks = diff * 0.40;
        let charity = diff - fireworks;

        console.log(`Yes! ${fireworks} lv are for fireworks and ${charity.toFixed(0)} lv are for donation.`)
    }
}

weddingParty([20, 1000]);
weddingParty([10, 150]);
weddingParty([20, 400]);