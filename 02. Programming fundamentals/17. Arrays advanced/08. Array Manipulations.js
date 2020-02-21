function arrayManipulation(params) {
    let arr = params.shift().split(' ').map(Number);

    for (let i = 0; i < params.length; i++) {
        let [command, firstNum, secondNum] = params[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                arr.push(firstNum);
                break;
            case 'Remove':
                arr = arr.filter(el => el !== firstNum);
                break;
            case 'RemoveAt':
                arr.splice(firstNum, 1);
                break;
            case 'Insert':
                arr.splice(firstNum, 0, secondNum);
                break;
        }
    }

    console.log(arr);
}

arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);