function nonDecreasingSubSequence(arguments) {
    let currentMax = Number(arguments.shift());
    let printLine = `${currentMax} `;

    for (let i = 0; i < arguments.length; i++) {
        if (Number(arguments[i]) > currentMax) {
            printLine += `${arguments[i]} `;
            currentMax = arguments[i]
        }
    }

    console.log(printLine.trim());
}

nonDecreasingSubSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubSequence([1, 2, 3, 4]);
nonDecreasingSubSequence([20, 3, 2, 15, 6, 1]);