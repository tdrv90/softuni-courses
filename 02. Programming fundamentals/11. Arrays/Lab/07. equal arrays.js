function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
    }
    for (let k = 0; k < secondArray.length; k++) {
        secondArray[k] = Number(secondArray[k]);
    }

    for (let j = 0; j < firstArray.length; j++) {
        if (firstArray[j] !== secondArray[j]) {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${j} index`);
            break;
        } else {
            sum += firstArray[j];
        }
    }

    if (isEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1'], ['10']);