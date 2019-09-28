function rotateArray(input) {
    let rotations = Number(input.pop()) % input.length;
    let arr = [...input];

    for (let i = 0; i < rotations; i++) {
        let poped = arr.pop();
        arr.unshift(poped);
    }

    console.log(arr.join(" "));
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2']);
// 3 4 1 2

rotateArray(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple',
        '15']
);
// Orange Coconut Apple Banana
