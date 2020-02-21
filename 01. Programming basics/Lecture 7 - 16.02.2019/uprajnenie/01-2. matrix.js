function matrix(arguments) {
    let numberA = Number(arguments.shift());
    let numberB = Number(arguments.shift());
    let numberC = Number(arguments.shift());
    let numberD = Number(arguments.shift());

    for (let i = numberA; i <= numberB; i++) {
        for (let j = numberA; j <= numberB; j++) {
            for (let k = numberC; k <= numberD; k++) {
                for (let l = numberC; l <= numberD; l++) {
                    if ((i + l == j + k) && (i != j && k != l)) {
                        console.log(`${i}${j}`);
                        console.log(`${k}${l}`);
                        console.log();
                    }
                }
            }
        }
    }
}

// matrix([1, 2, 3, 4]);
matrix([5,7,5,6]);