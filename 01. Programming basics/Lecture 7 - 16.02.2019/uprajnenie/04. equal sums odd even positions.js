function equalSumsEvenOddPosition(arguments) {
    let firstNum = arguments.shift();
    let secondNum = arguments.shift();

    let output = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = String(i);
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = currentNum.charCodeAt(j);

            if (j % 2 == 0) {
                evenSum += Number(currentDigit);
            } else {
                oddSum += Number(currentDigit);
            }
        }

        if (oddSum == evenSum) {
            output += `${i} `;
        }
    }

    console.log(output);
}

equalSumsEvenOddPosition([100000, 100050]);
equalSumsEvenOddPosition([123456, 124000]);
equalSumsEvenOddPosition([299900, 300000]);
equalSumsEvenOddPosition([100115, 100120]);