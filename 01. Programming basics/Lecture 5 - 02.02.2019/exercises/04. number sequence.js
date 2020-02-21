function numberSequence(arguments) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;

    let userInput = arguments.shift();

    while (userInput != "END") {
        let number = Number(userInput);

        if (number < minNumber) {
            minNumber = userInput;
        }
        if (number > maxNumber) {
            maxNumber = userInput;
        }

        userInput = arguments.shift();
    }

    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}

numberSequence([10, 20, 304, 0, 50, "END"]);
numberSequence([250, 5, 2, -766570, 100, 10768600, "END"]);