function sortingBigAndSmall(arrOfNums) {
    let length = arrOfNums.length
    let descendingArr = arrOfNums.sort((a, b) => b - a);
    let outputArr = [];

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            outputArr[i] = descendingArr.shift();
        } else {
            outputArr[i] = descendingArr.pop();
        }
    }
    console.log(outputArr.join(" "));
}


// for (let i = 0; i < halfLength; i++) {
//     let numFromFront = descendingArr[i];
//     let numFrontBack = ascendingArr[i];
//     outputArr.push(numFromFront);
//     outputArr.push(numFrontBack);
// }

sortingBigAndSmall([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);