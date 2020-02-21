function accountBalance(arguments) {
    let n = Number(arguments.shift());

    let counter = 0;
    let balance = 0;

    while (counter < n) {
        let amount = Number(arguments.shift());

        if (amount < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        counter++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance([5, 120, 45.55, -150]);