function christmasMarket (arguments) {
    // entry data
    let donationTarget = Number(arguments.shift());
    let fantasyBooks = Number(arguments.shift());
    let horrorBooks = Number(arguments.shift());
    let romanticBooks = Number(arguments.shift());

    // calculations
    let totalAmountExcludingVAT = (fantasyBooks * 14.90) + (horrorBooks * 9.80) + (romanticBooks * 4.30);
    let amountAfterVAT = totalAmountExcludingVAT - (totalAmountExcludingVAT * 0.20);
    let difference = amountAfterVAT - donationTarget;
    let donatedAmount = 0;

    if (amountAfterVAT > donationTarget) {
        let remuneration = Math.floor(difference * 0.10);
        donatedAmount = amountAfterVAT - remuneration;
        console.log(`${donatedAmount.toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${remuneration} leva.`)
    } else {
        console.log(`${Math.abs(difference).toFixed(2)} money needed.`);
    }
}

christmasMarket([200, 15, 10, 5]);
christmasMarket([168, 5, 3, 8]);


