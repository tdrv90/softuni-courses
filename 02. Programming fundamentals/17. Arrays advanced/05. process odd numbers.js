function processNumbersAtOddPositions(arguments) {
    let filteredOddNumbers = arguments.filter((num, i) => i % 2 == 1);

    let doubledNumbers = filteredOddNumbers.map(x => x * 2);

    let reversedNumbers = doubledNumbers.reverse();

    return reversedNumbers.join(' ');
}

console.log(processNumbersAtOddPositions([10, 15, 20, 25]));
console.log(processNumbersAtOddPositions([3, 0, 10, 4, 7, 3]));