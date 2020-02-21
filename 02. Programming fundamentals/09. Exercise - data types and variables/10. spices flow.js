function spiceFlow(startingYield) {
    const currentYield = Number(startingYield);
    let harvestedYield = 0;
    let daysHarvested = 0;

    for (let i = currentYield; i >= 100; i -= 10) {
        harvestedYield += i;
        harvestedYield -= 26;
        daysHarvested++;
    }

    if (harvestedYield <= 25) {
        harvestedYield -= harvestedYield;
    } else {
        harvestedYield -= 26;
    }

    console.log(daysHarvested);
    console.log(harvestedYield);
}

spiceFlow(450);