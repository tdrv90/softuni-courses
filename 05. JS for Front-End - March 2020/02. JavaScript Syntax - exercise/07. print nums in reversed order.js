function printReversed(nums) {
    return nums
        .reverse()
        .join('\n');
}

console.log(printReversed([10, 15, 20]));