function numberInRange(arguments) {
    let number = Number(arguments.shift());

    while (number < 1 || number > 100) {
        console.log(`${number} - invalid number!`);
        number = Number(arguments.shift());
    }
}

numberInRange([-321, 439, 423, 4294, 12329, 2]);