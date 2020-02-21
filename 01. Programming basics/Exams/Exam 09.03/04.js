function gameNumberWars(arguments) {
    let player1 = arguments.shift();
    let player2 = arguments.shift();

    let points1 = 0;
    let points2 = 0;
    let numberWars = false;

    let command = arguments.shift();

    while (command != "End of game") {
        let number1 = Number(command);
        let number2 = Number(arguments.shift());

        if (number1 == number2) {
            console.log("Number wars!")
            let number1last = Number(arguments.shift());
            let number2last = Number(arguments.shift());
            if (number1last > number2last) {
                console.log(`${player1} is winner with ${points1} points`)
            } else {
                console.log(`${player2} is winner with ${points2} points`)
            }
            numberWars = true;
            break;
        } else if (number1 > number2) {
            points1 += number1 - number2;
        } else if (number2 > number1) {
            points2 += number2 - number1;
        }


        command = arguments.shift();
    }

    if (numberWars == false) {
        console.log(`${player1} has ${points1} points`)
        console.log(`${player2} has ${points2} points`)
    }
}

gameNumberWars(["Desi", "Niki", 7, 5, 3, 4, 3, 3, 5, 3]);
gameNumberWars(["Elena", "Simeon", 6, 3, 2, 5, 8, 9, "End of game"]);
gameNumberWars(["Aleks", "Georgi", 4, 5, 3, 2, 4, 3, 4, 4, 5, 2]);