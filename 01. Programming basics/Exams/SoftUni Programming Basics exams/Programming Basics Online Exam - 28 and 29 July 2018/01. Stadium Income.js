function footballStadium(arguments) {
    let sectors = Number(arguments.shift());
    let capacity = Number(arguments.shift());
    let ticket = Number(arguments.shift());

    let total = capacity * ticket;
    let sectorRevenue = total / sectors;
    let charity = (total - (sectorRevenue * 0.75)) / 8;

    console.log(`Total income - ${total.toFixed(2)} BGN`);
    console.log(`Money for charity - ${charity.toFixed(2)} BGN`);
}

footballStadium([4, 5000, 5]);
footballStadium([8, 10000, 3.25]);