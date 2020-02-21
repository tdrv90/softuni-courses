function mergeArrays(firstArray, secondArray) {
    let mergedArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            mergedArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
        } else if (i % 2 === 1) {
            mergedArray[i] = String(firstArray[i]) + String(secondArray[i]);
        }
    }

    let output = mergedArray.join(" - ");
    console.log(output);
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);