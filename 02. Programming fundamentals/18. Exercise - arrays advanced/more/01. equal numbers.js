function equalNumbers(input) {
    let counter = 0;

    for (let i = 0; i < input.length - 1; i++) {
        let matrixRow = input[i];
        let nextMatrixRow = input[i + 1];

        for (let j = 0; j < matrixRow.length; j++) {
            let elementFromFirstMatrix = matrixRow[j];
            let elementFromSecondMatrix = nextMatrixRow[j];

            if (elementFromFirstMatrix == elementFromSecondMatrix) {
                counter++;
            }
        }
    }

    for (let m = 0; m < input.length; m++) {
        let row = input[m];
        
        for (let k = 0; k < row.length - 1; k++) {
            let firstEl = row[k];
            let secondEl = row[k + 1];

            if (firstEl == secondEl) {
                counter++;
            }
        }
    }

    console.log(counter);
}

// equalNumbers([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]);

equalNumbers([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);