function reverseArrayOfStrings(arguments) {
    let arr = arguments;
    arr.reverse();

    let printLine = "";

    for (let i = 0; i < arr.length; i++) {
        printLine += `${arr[i]} `;
    }

    return printLine;
}

console.log(reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e']));
console.log(reverseArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']));
console.log(reverseArrayOfStrings(['33', '123', '0', 'dd']));