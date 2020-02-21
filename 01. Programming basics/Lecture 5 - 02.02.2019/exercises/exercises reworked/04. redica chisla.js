function minmaxnumber(arguments) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;

    let command = arguments.shift();

    while (command != "END") {
        let num = Number(command);

        if (num > maxNumber) {
            maxNumber = num;
        }
        if (num < minNumber) {
            minNumber = num;
        }

        command = arguments.shift();
    }

    console.log(`Max number: ${maxNumber} \nMin number: ${minNumber}`);
}


minmaxnumber([10, 20, 304, 0, 50, "END"]);