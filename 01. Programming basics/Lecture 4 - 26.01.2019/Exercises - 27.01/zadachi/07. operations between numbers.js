function operationsBetweenNrs(arguments) {
    let num1 = Number(arguments.shift());
    let num2 = Number(arguments.shift());
    let operator = arguments.shift();

    let result = 0;
    let oddOrEven;

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 == 0) {
                oddOrEven = "even";
            } else {
                oddOrEven = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`);
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 == 0) {
                oddOrEven = "even";
            } else {
                oddOrEven = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`);
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 == 0) {
                oddOrEven = "even";
            } else {
                oddOrEven = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`);
            break;
        case "/":
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
            }
            break;
        case "%":
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`)
            }
            break;
    }
}

operationsBetweenNrs([10, 12, "+"]);
operationsBetweenNrs([10, 1, "-"]);
operationsBetweenNrs([7, 3, "*"]);
operationsBetweenNrs([123, 12, "/"]);
operationsBetweenNrs([10, 3, "%"]);
operationsBetweenNrs([112, 0, "/"]);
operationsBetweenNrs([10, 0, "%"]);