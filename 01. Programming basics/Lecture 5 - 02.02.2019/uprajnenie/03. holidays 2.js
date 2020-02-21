function holidayJessy(arguments) {
    let goalMoney = Number(arguments.shift());
    let currentMoney = Number(arguments.shift());

    let spendingDaysCounter = 0;
    let totalDaysCounter = 0;

    while (currentMoney < goalMoney && spendingDaysCounter < 5) {
        let action = arguments.shift();
        let amount = Number(arguments.shift());
        totalDaysCounter++;

        if (action == "spend") {
            spendingDaysCounter++;
            if (amount > currentMoney) {
                currentMoney = 0;
            } else {
                currentMoney -= amount;
            }
        } else if (action == "save") {
            currentMoney += amount;
            spendingDaysCounter = 0;
            if (currentMoney >= goalMoney) {
                console.log(`You saved the money for ${totalDaysCounter} days.`);
            }
        }

        if (spendingDaysCounter == 5) {
            console.log(`You can't save the money.`);
            console.log(totalDaysCounter);
            break;
        }
    }

}

// holidayJessy([2000, 1000, "spend", 1200, "save", 2000]);
holidayJessy(["110", 60, "save", 10, "spend", 20, "spend", 10, "spend", 10, "spend", 10, "spend", 10]);