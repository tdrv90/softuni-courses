function airPollution(arrForMatrix, arrWithCommands) {
    let isNotPolluted = true;
    let pollutedAreas = '';
    let matrix = [];
    for (let i = 0; i < arrForMatrix.length; i++) {
        matrix[i] = arrForMatrix[i]
            .split(' ')
            .map(Number);
    }

    for (let j = 0; j < arrWithCommands.length; j++) {
        let line = arrWithCommands[j].split(' ');
        let command = line[0];
        let value = line[1];

        if (command === 'breeze') {
            for (let k = 0; k < matrix[value].length; k++) {
                matrix[value][k] -= 15;

                if (matrix[value][k] < 0) {
                    matrix[value][k] = 0;
                }
            }
        } else if (command === 'gale') {
            for (let l = 0; l < matrix.length; l++) {
                matrix[l][value] -= 20;

                if (matrix[l][value] < 0) {
                    matrix[l][value] = 0;
                }
            }
        } else if (command === 'smog') {
            for (let u = 0; u < matrix.length; u++) {
                for (let y = 0; y < matrix[u].length; y++) {
                    matrix[u][y] += Number(value);
                }
            }
        }

    }
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
            let element = +(matrix[rowIndex][colIndex]);

            if (element >= 50) {
                pollutedAreas += `[${rowIndex}-${colIndex}], `;
                isNotPolluted = false;
            }
        }
    }
    pollutedAreas = pollutedAreas.substring(0, pollutedAreas.length - 2);

    if (isNotPolluted) {
        console.log(`No polluted areas`);
    } else {
        console.log(`Polluted areas: ${pollutedAreas}`);
    }
}

// airPollution(["5 7 72 14 4",
//     "41 35 37 27 33",
//     "23 16 27 42 12",
//     "2 20 28 39 14",
//     "16 34 31 10 24"],
//     ["breeze 1", "gale 2", "smog 25"]
// )
airPollution(["5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]);
// airPollution(["5 7 3 28 32",
//     "41 12 49 30 33",
//     "3 16 20 42 12",
//     "2 20 10 39 14",
//     "7 34 4 27 24"],
//     ["smog 11", "gale 3", "breeze 1", "smog 2"])