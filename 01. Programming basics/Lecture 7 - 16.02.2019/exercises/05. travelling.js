function travelling(arguments) {
    let destination = arguments.shift();

    while (destination != "End") {
        let neededMoney = Number(arguments.shift());
        let savedMoney = 0;

        while (savedMoney < neededMoney) {
            let money = Number(arguments.shift());
            savedMoney += money;
            if (savedMoney >= neededMoney) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
        destination = arguments.shift();
    }
}

// travelling(["Greece", 1000, 200, 200, 300, 100, 150, 240, "Spain", 1200, 300, 500, 193, 423, "End"]);
travelling(["France", 2000, 300, 300, 200, 400, 190, 258, 360, "Portugal", 1450, 400, 400, 200, 300, 300, "Egypt", 1900, 1000, 280, 300, 500, "End"]);