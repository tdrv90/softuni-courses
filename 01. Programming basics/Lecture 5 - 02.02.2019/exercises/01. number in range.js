function numberInRange(arguments) {
    let number = Number(arguments.shift());

    while (number < 1 || number > 100) {
        console.log("Invalid number!")
        number = Number(arguments.shift())
    }

    console.log(`The number is: ${number}`);
}

numberInRange([-35, 7]);