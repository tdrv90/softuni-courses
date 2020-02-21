function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let minNum = Number.MAX_SAFE_INTEGER;

    if (firstNum < minNum) {
        minNum = firstNum;
    }

    if (secondNum < minNum) {
        minNum = secondNum;
    }

    if (thirdNum < minNum) {
        minNum = thirdNum;
    }

    console.log(minNum);
}

smallestOfThreeNumbers(3, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);