function matrix(arguments) {
    let a = Number(arguments.shift());
    let b = Number(arguments.shift());
    let c = Number(arguments.shift());
    let d = Number(arguments.shift());

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            for (let k = c; k <= d; k++) {
                for (let l = c; l <= d; l++) {
                    if (((i + l) == (j + k)) && (i != j && k != l)) {
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