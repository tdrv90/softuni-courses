function condenseArrayToNumber(startingArray) {
    let newArr = [];
    while (startingArray.length > 1) {
        for (let i = 0; i < startingArray.length - 1; i++) {
            newArr[i] = startingArray[i] + startingArray[i + 1];
        }
        startingArray = newArr;
        newArr = startingArray.slice(0, -1);
    }
    console.log(startingArray[0]);
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);

