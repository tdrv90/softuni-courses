function printEveryNthEl(input) {
    let step = Number(input.pop());

    for (let i = 0; i < input.length; i = i + step) {
        console.log(input[i]);
    }
}

printEveryNthEl(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);

// 5
// 31
// 20