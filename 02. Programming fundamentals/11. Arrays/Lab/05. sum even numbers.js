function sumEvenNumbers(arguments) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 === 0) {
            sum += Number(arguments[i]);
        }
    }

    return sum;
}

console.log(sumEvenNumbers(['1', '2', '3', '4', '5', '6']));
console.log(sumEvenNumbers(['3', '5', '7', '9']));
console.log(sumEvenNumbers(['2', '4', '6', '8', '10']));