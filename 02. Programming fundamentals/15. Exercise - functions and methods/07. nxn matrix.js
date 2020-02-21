function nXnMatrix(num) {
    let printLine = "";
    for (let i = 0; i < num; i++) {
        printLine += `${num} `;
    }

    for (let j = 0; j < num; j++) {
        console.log(printLine);
    }
}

nXnMatrix(3);