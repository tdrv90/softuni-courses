function oddEvenPositions(arguments) {
    let n = Number(arguments[0]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);
        if (i % 2 != 0) {
            oddSum += num;
        }
        if (i % 2 == 0) {
            evenSum += num;
        }

        if (i % 2 != 0 && num > oddMax) {
            oddMax = num;
        }
        if (i % 2 == 0 && num > evenMax) {
            evenMax = num;
        }
        if (i % 2 != 0 && num < oddMin) {
            oddMin = num;
        }
        if (i % 2 == 0 && num < evenMin) {
            evenMin = num;
        }
    }

    if (oddMin == Number.MAX_SAFE_INTEGER) {
        oddMin = "No";
    }
    if (evenMin == Number.MAX_SAFE_INTEGER) {
        evenMin = "No";
    }
    if (oddMax == Number.MIN_SAFE_INTEGER) {
        oddMax = "No";
    }
    if (evenMax == Number.MIN_SAFE_INTEGER) {
        evenMax = "No";
    }

    console.log(`OddSum=${oddSum}, OddMin=${oddMin}, OddMax=${oddMax}, EvenSum=${evenSum}, EvenMin=${evenMin}, EvenMax=${evenMax}`)
}

oddEvenPositions([6, 2, 3, 5, 4, 2, 1]);
oddEvenPositions([6, 2, 3, 5, 4, 2, 1]);
oddEvenPositions([6, 2, 3, 5, 4, 2, 1]);
oddEvenPositions([6, 2, 3, 5, 4, 2, 1]);