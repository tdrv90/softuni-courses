function elementEqualToRest(arguments) {
    let n = Number(arguments[0]);
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let number = Number(arguments[i]);

        sum += number;
        if (number > max) {
            max = number;
        }
    }

    sum -= max;

    if (sum === max) {
        console.log(`Yes`);
        console.log(`Sum = ${sum}`);
    } else {
        let diff = Math.abs(sum - max);
        console.log(`No`);
        console.log(`Diff = ${diff}`);
    }
}


elementEqualToRest([7, 3, 4, 1, 1, 2, 12, 1]);
elementEqualToRest([4, 6, 1, 2, 3]);
elementEqualToRest([3, 1, 1, 10]);
elementEqualToRest([3, 5, 5, 1]);
elementEqualToRest([3, 1, 1, 1]);