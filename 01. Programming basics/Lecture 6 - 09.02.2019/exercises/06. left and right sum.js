function leftRightSum(arguments) {
    let n = Number(arguments[0]);

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);

        leftSum += num;
    }
    for (let i = 1 + n; i <= n * 2; i++) {
        let num = Number(arguments[i]);

        rightSum += num;
    }

    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        let diff = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${diff}`);
    }
}


leftRightSum([2, 10, 90, 60, 40]);
leftRightSum([2, 90, 9, 50, 50]);
