function multiplyDivide (numbers) {
    let n = numbers[0];
    let x = numbers[1];

    if (x >= n) {
        return n * x;
    }

    return n / x;
}