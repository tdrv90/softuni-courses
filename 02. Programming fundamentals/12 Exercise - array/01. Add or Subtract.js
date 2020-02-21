function addOrSubtract(arguments) {
    let firstArraySum = 0;
    for (let i = 0; i < arguments.length; i++) {
        firstArraySum += Number(arguments[i]);
    }

    let secondArray = [];

    for (let k = 0; k < arguments.length; k++) {
        if (arguments[k] % 2 == 0) {
            secondArray[k] = arguments[k] + k;
        } else {
            secondArray[k] = arguments[k] - k;
        }
    }

    console.log(secondArray);
    let secondArraySum = 0;
    for (let j = 0; j < secondArray.length; j++) {
        secondArraySum += Number(secondArray[j]);
    }

    console.log(secondArray);
    console.log(firstArraySum);
    console.log(secondArraySum);
}

addOrSubtract([5, 15, 23, 56, 35]);