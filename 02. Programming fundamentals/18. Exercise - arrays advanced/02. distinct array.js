function distinctArray(arr) {
    let distinct = [];

    for (let i = 0; i < arr.length; i++) {
        let indexOfEl = arr.indexOf(arr[i]);

        if (i === indexOfEl) {
            distinct.push(arr[i]);
        }
    }

    return distinct.join(' ');
}

console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));
