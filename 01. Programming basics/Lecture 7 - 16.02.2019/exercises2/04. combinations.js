function combinations(arguments) {
    let n = Number(arguments.shift());

    let counter = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                for (let l = 0; l <= n; l++) {
                    for (let m = 0; m <= n; m++) {
                        if (i+j+k+l+m == n) {
                            counter++;
                        }
                    }
                }
            }
        }
    }
    console.log(counter);
}

combinations([25]);
combinations([10]);
combinations([35]);
