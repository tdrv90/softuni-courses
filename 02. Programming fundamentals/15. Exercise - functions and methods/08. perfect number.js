function perfectNumber(number) {
    let tempNum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            tempNum += i;
        }
    }

    if (tempNum === number && tempNum !== 0) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);