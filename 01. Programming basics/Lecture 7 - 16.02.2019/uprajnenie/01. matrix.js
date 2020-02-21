function matrix(arguments) {
    let numberA = Number(arguments[0]);
    let numberB = Number(arguments[1]);
    let numberC = Number(arguments[2]);
    let numberD = Number(arguments[3]);

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

matrix([1, 2, 3, 4]);
// matrix([2, 4, 4, 5]);