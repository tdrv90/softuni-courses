function coding(arguments) {
    let entry = arguments.shift();

    for (let i = entry.length - 1; i >= 0; i--) {
        let currentDigitToNum = Number(entry[i]);
        if (currentDigitToNum == 0) {
            console.log("ZERO");
            continue;
        }
        let printLine = "";
        for (let j = 1; j <= currentDigitToNum; j++) {
            printLine += String.fromCharCode(currentDigitToNum + 33);
        }
        console.log(printLine);
    }
}

coding(["123456789"]);