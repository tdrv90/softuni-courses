function triangleOfNumbers (num) {
    let n = +num;

    for (let i = 1; i <= n; i++) {
        let printLine = "";
        for (let k = 1; k <= i; k++) {
            printLine += `${i} `;
        }
        console.log(printLine);
    }
}

triangleOfNumbers(5);