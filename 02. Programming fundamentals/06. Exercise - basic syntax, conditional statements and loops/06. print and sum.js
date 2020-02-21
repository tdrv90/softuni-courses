function printAndSum(startNumber, endNumber) {
    let sum = 0;
    let printLine = "";
    for (let i = startNumber; i <= endNumber; i++) {
        printLine += `${i} `;
        sum += i;
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);