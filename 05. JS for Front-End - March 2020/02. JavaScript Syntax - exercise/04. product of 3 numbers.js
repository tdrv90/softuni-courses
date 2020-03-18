function productOfThree(nums) {
    let countNegatives = 0;
    let isZero = (el) => el === 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            countNegatives++;
        }
    }

    if (nums.some(isZero)) { // if any is 0 => positive
        return 'Positive';
    }

    if (countNegatives % 2 === 1) { // odd count of negative => negative
        return 'Negative';
    }

    return 'Positive'; // even count of negative nums => positive
}

console.log(productOfThree([2, 3, -1]));
console.log(productOfThree([5, 4, 3]));
console.log(productOfThree([-3, -4, -5]));