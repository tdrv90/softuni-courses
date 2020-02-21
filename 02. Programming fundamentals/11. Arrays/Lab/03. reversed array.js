function reverseAnArrayOfNumbers(n, startArray) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(startArray[i]);
    }
    newArr.reverse();

    let printLine = "";

    for (let k = 0; k < newArr.length; k++) {
        printLine += `${newArr[k]} `;
    }

    return printLine;
}

console.log(reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]));