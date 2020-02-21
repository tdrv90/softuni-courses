function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        digitSum = i.toString();

        for (let k = 0; k < digitSum.length; k++) {
            sum += Number(digitSum[k]);
        }
        if (sum % 5 == 0 || sum % 7 == 0 || sum % 11 == 0) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(130.45);