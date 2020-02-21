function halfSumElement(arguments) {
    let n = Number(arguments[0]);

    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);

        sum += num;

        if (num > max) {
            max = num;
        }
    }

    sum -= max;

    if (sum == max) {
        console.log(`Yes`);
        console.log(`Sum = ${sum}`);
    } else {
        let diff = Math.abs(sum - max);
        console.log(`No`);
        console.log(`Diff = ${diff}`);
    }
}

halfSumElement([7, 3, 4, 1, 1, 2, 12, 1]);
halfSumElement([4, 6, 1, 2, 3]);
halfSumElement([3, 1, 1, 10]);