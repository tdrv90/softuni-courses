function calculator(num1, operator, num2) {
    let output = 0;
    switch (operator) {
        case "+":
            output = num1 + num2;
            break;
        case "-":
            output = num1 - num2;
            break;
        case "*":
            output = num1 * num2;
            break;
        case "/":
            output = num1 / num2;
            break;
    }

    console.log(output.toFixed(2));
}

calculator(5, '+', 10)
calculator(25.5, '-', 3)