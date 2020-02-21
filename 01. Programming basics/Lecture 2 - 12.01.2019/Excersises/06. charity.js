function charityCampaing (arguments) {
    // input data
    let days = Number(arguments.shift());
    let bakers = Number(arguments.shift());
    let cakesNorm = Number(arguments.shift());
    let waffleNorm = Number(arguments.shift());
    let pancakeNorm = Number(arguments.shift());

    // calculations
    let totalIncome = days * bakers * ((cakesNorm * 45) + (waffleNorm * 5.80) + (pancakeNorm * 3.20));
    let finalIncome = totalIncome - (totalIncome / 8);

    // otput data
    console.log(finalIncome.toFixed(2));
}

charityCampaing([20, 8, 14, 30, 16]);
charityCampaing([131, 5, 9, 33, 46]);