function smallestTwoNumbers(arguments) {
    let sortedArr = arguments.sort((a, b) => a - b);

    console.log(`${sortedArr[0]} ${sortedArr[1]}`);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);