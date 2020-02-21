function numberPyramid(arguments) {
    let n = Number(arguments.shift());

    let current = 1;
    let isBigger = false;
    let printLine = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printLine += `${current} `;
            current++;
        }
        console.log(printLine);
        if (isBigger) {
            break;
        }
    }
}


numberPyramid([10]);