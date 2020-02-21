function equalPairs(arguments) {
    let n = Number(arguments[0]);
    let first = Number(arguments[1]);
    let second = Number(arguments[2]);
    let total = first + second;
    let maxDiff = 0;

    for (i = 3; i <= n * 2; i += 2) {
        first = Number(arguments[i]);
        second = Number(arguments[i + 1]);

        let currentTotal = first + second;
        let currentDiff = Math.abs(currentTotal - total);
        if (currentDiff > maxDiff) {
            maxDiff = currentDiff;
        }
        total = currentTotal;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${total}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

// equalPairs([3, 1, 2, 0, 3, 4, -1]);
// equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
// equalPairs([2, -1, 0, 0, -1]);
// equalPairs([2, 1, 2, 2, 2]);
// equalPairs([1, 5, 5]);
equalPairs([2, -1, 2, 0, -1]);