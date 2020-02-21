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
        } else {
            evenSum += num;
        }

        if (i % 2 != 0 && num > oddMax) {
            oddMax = num;
        }
        if (i % 2 != 0 && num < oddMin) {
            oddMin = num;
        }
        if (i % 2 == 0 && num > evenMax) {
            evenMax = num;
        }
        if (i % 2 == 0 && num < evenMin) {
            evenMin = num;
        }
    }

    if (oddMin == Number.MAX_SAFE_INTEGER) {
        oddMin = "No";
    }
    if (oddMax == Number.MIN_SAFE_INTEGER) {
        oddMax = "No";
    }
    if (evenMin == Number.MAX_SAFE_INTEGER) {
        evenMin = "No";
    }
    if (evenMax == Number.MIN_SAFE_INTEGER) {
        evenMax = "No";
    }

    console.log(`OddSum=${oddSum}, OddMin=${oddMin}, OddMax=${oddMax}, EvenSum=${evenSum}, EvenMin=${evenMin}, EvenMax=${evenMax}`);
}


// oddEvenPositions([6, 2, 3, 5, 4, 2, 1]);
// oddEvenPositions([2, 1.5, -2.5]);
// oddEvenPositions([1, 1]);
// oddEvenPositions([0]);
// oddEvenPositions([5, 3, -2, 8, 11, -3]);
oddEvenPositions([4, 1.5, 1.75, 1.5, 1.75]);