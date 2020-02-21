function equalPairs2(arguments) {
    let nrOfPairs = Number(arguments[0]);

    let first = Number(arguments[1]);
    let second = Number(arguments[2]);
    let total = first + second;
    let maxDiff = 0;

    for (let i = 3; i <= nrOfPairs * 2; i += 2) {
        first = Number(arguments[i]);
        second = Number(arguments[i + 1]);
        let currentTotal = first + second;
        let currentDiff = Math.abs(currentTotal - total);

        if (currentDiff > maxDiff) {
            maxDiff = currentDiff;
        }
        total = currentTotal;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${total}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}



// function equalPairs(arguments) {
//     let numberOfPairs = Number(arguments[0]);

//     let first = Number(arguments[1]);
//     let second = Number(arguments[2]);
//     let total = first + second;
//     let maxDiff = 0;

//     for (var i = 3; i <= numberOfPairs * 2; i += 2) {
//         first = Number(arguments[i]);
//         second = Number(arguments[i + 1]);
//         let currentTotal = first + second;
//         let currentDiff = Math.abs(currentTotal - total);

//         if (currentDiff > maxDiff) {
//             maxDiff = currentDiff;
//         }
//         total = currentTotal;
//     }

//     if (maxDiff === 0) {
//         console.log(`Yes, value=${total}`);
//     } else {
//         console.log(`No, maxdiff=${maxDiff}`);
//     }
// }

equalPairs2([5, 1, 2, 0, 3, 4, -1, 1, 2, 1, 2]);
// equalPairs2([2, 1, 2, 2, 2]);