function specialNumber(arguments) {
    let n = Number(arguments.shift());
    let output = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (n % i == 0 && n % j == 0 && n % k == 0 && n % l == 0) {
                        output += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(output);
}

specialNumber([16]);