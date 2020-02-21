function oddEvenSum (arguments) {
    let n = Number(arguments[0]);

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);

        if (i % 2 == 0) {
            evenSum += num;
        }
    }
    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);

        if (i % 2 != 0) {
            oddSum += num;
        }
    }

    if (evenSum == oddSum) {
        console.log(`Yes`);
        console.log(`Sum = ${evenSum}`);
    } else {
        let diff = Math.abs(evenSum - oddSum);
        console.log(`No`);
        console.log(`Diff = ${diff}`);
    }
    
}


oddEvenSum([4, 10, 50, 60, 20]);
oddEvenSum([4, 3, 5, 1, -2]);
oddEvenSum([3, 5, 8, 1]);