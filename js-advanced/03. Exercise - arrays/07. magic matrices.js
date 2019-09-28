function magicMatrices(input) {
    let sumToCompare = input[0].reduce((a, b) => a + b, 0);
    let isMagical = true;

    for (let row of input) {
        let rowSum = row.reduce((a, b) => a + b, 0);
        if (rowSum !== sumToCompare) {
            isMagical = false;
            console.log("false");
            break;

        }
    }

    if (isMagical) {
        let count = 0;
        let divider = 0;
        let colSum = 0;
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[i].length; j++) {
                count++;
                colSum += Number(input[j][i]);
                divider = j + 1;
            }
        }
        let asd = count / divider;
        let result = colSum / asd;

        if (result !== sumToCompare) {
            isMagical = false;
            console.log("false");
        } else {
            console.log("true");
        }
    }
}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);