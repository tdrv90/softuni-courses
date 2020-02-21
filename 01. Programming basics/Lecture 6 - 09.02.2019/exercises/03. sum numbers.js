function sumNumbers(arguments) {
    let n = Number(arguments[0]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += Number(arguments[i]);
    }
    console.log(sum);
}

sumNumbers([2, 10, 20]);
sumNumbers([3, -10, -20, -30]);
sumNumbers([4, 45, -20, 7, 11]);
sumNumbers([1, 999]);
sumNumbers([0]);