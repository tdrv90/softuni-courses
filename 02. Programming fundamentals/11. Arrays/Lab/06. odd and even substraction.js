function oddAndEvenSubstraction(arguments) {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arguments.length; i++) {
        arguments[i] = Number(arguments[i]);
    }

    for (let num of arguments) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let output = evenSum - oddSum;

    return output;
}

console.log(oddAndEvenSubstraction([1, 2, 3, 4, 5, 6]));