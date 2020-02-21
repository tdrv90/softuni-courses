function rotateArray(arrayToBerotated) {
    let numOfRotations = Number(arrayToBerotated.pop());
    numOfRotations = numOfRotations % arrayToBerotated.length;
    for (let i = 0; i < numOfRotations; i++) {
        let tempContainer = arrayToBerotated.pop();
        arrayToBerotated.unshift(tempContainer);
    }

    console.log(arrayToBerotated.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);