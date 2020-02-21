function maxNumber(array) {
    let topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let isTopInteger = true;

        for (let k = i + 1; k < array.length; k++) {
            let nextEl = array[k];

            if (currentEl <= nextEl) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            topIntegers.push(currentEl);
        }
    }

    console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);