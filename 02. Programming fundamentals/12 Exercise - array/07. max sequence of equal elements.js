function maxSequnceOfEqualElements(arguments) {
    let indexOfBiggestSeq = -1;
    let maxSeqLength = 0;

    for (let i = 0; i < arguments.length; i++) {
        let currentEl = arguments[i];
        let currentSeqLength = 1;

        for (let j = i + 1; j < arguments.length; j++) {
            let nextEl = arguments[j];

            if (currentEl !== nextEl) {
                break;
            }
            currentSeqLength++;
        }

        if (currentSeqLength > maxSeqLength) {
            maxSeqLength = currentSeqLength;
            indexOfBiggestSeq = i;
        }
    }

    let element = arguments[indexOfBiggestSeq];
    console.log(`${element} `.repeat(maxSeqLength).trim());
}

maxSequnceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequnceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);