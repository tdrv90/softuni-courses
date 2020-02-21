function bunnyKill(input) {
    let bombs = input.pop().split(',').map(Number);
    let matrix = []

    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        matrix[i] = row;
    }
    let matrixNr = matrix.map(Number);

    console.log(bombs);
    console.log(matrixNr);
}

bunnyKill(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);