function tailoring (arguments) {
    let tables = Number(arguments.shift());
    let tableLength = Number(arguments.shift());
    let tableWidth = Number(arguments.shift());

    let coverArea = (tableLength + 0.60) * (tableWidth + 0.60);
    let kareaArea = (tableLength * 0.50) * (tableLength * 0.50);
    
    let totalExpenseInUSD = tables * ((coverArea * 7) + (kareaArea * 9));
    let totalExpenseInBGN = totalExpenseInUSD * 1.85;

    console.log(`${totalExpenseInUSD.toFixed(2)} USD`);
    console.log(`${totalExpenseInBGN.toFixed(2)} BGN`);
    
}

tailoring([5, 1, 0.50]);
tailoring([10, 1.20, 0.65]);