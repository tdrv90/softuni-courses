function vendingMachineChange(arguments) {
    let change = Number(arguments.shift());
    change *= 100;

    let coinCounter = 0;

    while (change >= 200) {
        change -= 200;
        coinCounter++;
    }
    while (change >= 100) {
        change -= 100;
        coinCounter++;
    }
    while (change >= 50) {
        change -= 50;
        coinCounter++;
    }
    while (change >= 20) {
        change -= 20;
        coinCounter++;
    }
    while (change >= 10) {
        change -= 10;
        coinCounter++;
    }
    while (change >= 5) {
        change -= 5;
        coinCounter++;
    }
    while (change >= 2) {
        change -= 2;
        coinCounter++;
    }
    while (change >= 1) {
        change -= 1;
        coinCounter++;
    }

    console.log(coinCounter);
}

// vendingMachineChange([1.23]);
// vendingMachineChange([2]);
// vendingMachineChange([0.56]);
vendingMachineChange([2.73]);