function magicNumbers (arguments) {
    let num = Number(arguments.shift());
    let container = "";

    for (let firstDigit = 1; firstDigit <= 9; firstDigit++) {
        for (let secondDigit = 1; secondDigit <= 9; secondDigit++) {
            for (let thirdDigit = 1; thirdDigit <= 9; thirdDigit++) {
                for (let forthDigit = 1; forthDigit <= 9; forthDigit++) {
                    for (let fifthDigit = 1; fifthDigit <= 9; fifthDigit++) {
                        for (let sixthDigit = 1; sixthDigit <= 9; sixthDigit++) {
                            let product = firstDigit * secondDigit * thirdDigit * forthDigit * fifthDigit * sixthDigit;
                            if (product == num) {
                                container += `${firstDigit}${secondDigit}${thirdDigit}${forthDigit}${fifthDigit}${sixthDigit} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(container);
}


magicNumbers([8]);