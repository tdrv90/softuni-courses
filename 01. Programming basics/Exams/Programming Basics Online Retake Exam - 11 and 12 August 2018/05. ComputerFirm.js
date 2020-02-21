function computerFirm(arguments) {
    let numComps = Number(arguments.shift());

    let totalRate = 0;
    let totalSales = 0;

    for (i = 1; i <= numComps; i++) {
        let comps = Number(arguments.shift());
        let rate = comps % 10;
        let sales = Math.floor(comps / 10);

        totalRate += rate;

        if (rate == 3) {
            totalSales += sales * 0.50;
        } else if (rate == 4) {
            totalSales += sales * 0.70;
        } else if (rate == 5) {
            totalSales += sales * 0.85;
        } else if (rate == 6) {
            totalSales += sales;
        }
    }
    let average = totalRate / numComps;

    console.log();
    console.log();
}