function mathPuzzle(arguments) {
    let num = Number(arguments.shift());
    let count = 0;

    for (let a = 1; a <= 30; a++) {
        for (let b = 1; b <= 30; b++) {
            for (let c = 1; c <= 30; c++) {
                if (a < b && b < c && a + b + c == num) {
                    console.log(`${a} + ${b} + ${c} = ${num}`);
                    count++;
                }
                if (a > b && b > c && a * b * c == num) {
                    console.log(`${a} * ${b} * ${c} = ${num}`);
                    count++;
                }
            }
        }
    }
    if (count == 0) {
        console.log(`No!`);
    }
}

mathPuzzle([10]);