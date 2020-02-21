function equalSums(arguments) {
    let equalAtindex = -1;

    for (let i = 0; i < arguments.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arguments[j];
        }
        for (let k = i + 1; k < arguments.length; k++) {
            rightSum += arguments[k];
        }

        if (leftSum === rightSum) {
            equalAtindex = i;
        }
    }
    if (equalAtindex !== -1) {
        console.log(equalAtindex);
    } else {
        console.log("no");
    }

}


equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);