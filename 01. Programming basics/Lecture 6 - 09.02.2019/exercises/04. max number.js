function maxNumberInRow (arguments) {
    let n = Number(arguments[0]);

    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);

        if (num > max) {
            max = num;
        }
    }

    console.log(max);
}

maxNumberInRow([2, 100, 99]);
maxNumberInRow([3, -10, 20,-30]);
maxNumberInRow([4, 45, -20, 7, 99]);
maxNumberInRow([1, 999]);
maxNumberInRow([2, -1, -2]);