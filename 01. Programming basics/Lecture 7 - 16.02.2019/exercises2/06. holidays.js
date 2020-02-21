function aniHolidays(arguments) {
    let destination = arguments.shift();

    while (destination != "End") {
        let moneyNeeded = Number(arguments.shift());
        let moneySaved = 0;

        while (moneySaved < moneyNeeded) {
            moneySaved += Number(arguments.shift());
        }
        console.log(`Going to ${destination}`);
        destination = arguments.shift();
    }
}

aniHolidays(["Bulgaria", 2000, 300, 300, 200, 400, 190, 258, 360, "Greece", 1450, 400, 400, 200, 300, 300, "Syria", 1900, 1000, 280, 300, 500, "End"]);