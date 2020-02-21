function oddAndEvenSum(num) {
    let numToStr = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numToStr.length; i++) {
        let digit = Number(numToStr[i]);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else if (digit % 2 === 1) {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);