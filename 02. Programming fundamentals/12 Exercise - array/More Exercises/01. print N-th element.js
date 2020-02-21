function printNthElement(arguments) {
    let step = Number(arguments.pop());
    let output = "";

    for (let i = 0; i < arguments.length; i = i + step) {
        output += `${arguments[i]} `;
    }

    console.log(output.trim());
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);