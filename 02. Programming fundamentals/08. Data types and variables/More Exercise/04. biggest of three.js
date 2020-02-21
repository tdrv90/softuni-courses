function biggestOfThree(firstNum, secondNum, thirdNum) {
    let biggest = firstNum;

    if (secondNum > biggest) {
        biggest = secondNum;
    }
    if (thirdNum > biggest) {
        biggest = thirdNum;
    }

    return biggest;
}

console.log(biggestOfThree(-2, 7, 3));
console.log(biggestOfThree(130, 5, 99));
console.log(biggestOfThree(43, 43.2, 43.1));