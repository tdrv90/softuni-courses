function calculator(firstNumber, operator, secondNumber) {
    let output = 0;
    switch (operator) {
        case "+":
            output = firstNumber + secondNumber;
            break;
        case "-":
            output = firstNumber - secondNumber;
            break;
        case "*":
            output = firstNumber * secondNumber;
            break;
        case "/":
            output = firstNumber / secondNumber;
            break;
    }

    output = output.toFixed(2);

    return output;
}

console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));