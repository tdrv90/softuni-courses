function extractIncreasingSeq(input) {
    let currentNum = Number(input[0]);
    let sequence = [];

    input.forEach(n => {
        if (n >= currentNum) {
            sequence.push(n);
            currentNum = n;
        }
    });

    sequence.forEach(element => {
        console.log(element);
    });
}


extractIncreasingSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSeq([1, 2, 3, 4]);
extractIncreasingSeq([20, 3, 2, 15, 6, 1]);