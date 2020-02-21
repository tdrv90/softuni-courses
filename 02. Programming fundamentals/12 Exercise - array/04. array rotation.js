function arrayRotation(arrayTobeRotated, numOfRotations) {
    numOfRotations = numOfRotations % arrayTobeRotated.length;

    for (let i = 0; i < numOfRotations; i++) {
        let tempContainer = arrayTobeRotated.shift();
        arrayTobeRotated.push(tempContainer);
    }

    let output = arrayTobeRotated.join(" ");
    console.log(output);
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);