function christmasDecorations(arguments) {
    let budget = Number(arguments.shift());
    let command = arguments.shift();

    while (command != "Stop") {
        let cost = 0;
        for (let i = 0; i < command.length; i++) {
            cost += command.charCodeAt(i);
        }
        budget -= cost;
        if (budget < 0) {
            console.log(`Not enough money!`);
            break;
        } else {
            console.log(`Item successfully purchased!`);
        }

        command = arguments.shift();
    }
    if (budget > 0) {
        console.log(`Money left: ${budget}`);
    }
}

// christmasDecorations([3000, "star", "Christmas tree", "tinsel", "Tree stand"]);
christmasDecorations([5000, "Christmas lights", "wreath", "Stop"]);