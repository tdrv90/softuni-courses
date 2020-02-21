function commonElements(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++) {
        for (let k = 0; k < secondArray.length; k++) {
            if (secondArray[k] === firstArray[i]) {
                console.log(secondArray[k]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);