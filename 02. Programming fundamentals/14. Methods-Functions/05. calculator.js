function simpleCalculator(firstArg, secondArg, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(firstArg, secondArg));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(firstArg, secondArg));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(firstArg, secondArg));
            break;
        case 'subtract':
            let subtract = (a, b) => a - b;
            console.log(subtract(firstArg, secondArg));
            break;
    }
}

simpleCalculator(5, 5, 'multiply');