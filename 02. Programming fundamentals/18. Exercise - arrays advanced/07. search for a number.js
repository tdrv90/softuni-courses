function searchForANumber(arrOfInt, arrOfNr) {
    let elementsToTake = arrOfNr[0];
    let elementsToDelete = arrOfNr[1];
    let numberToFind = arrOfNr[2];
    let count = 0;

    let newArr = arrOfInt.slice(0, elementsToTake);
    newArr.splice(0, elementsToDelete);

    for (let i = 0; i < newArr.length; i++) {
        const el = newArr[i];

        if (el === numberToFind) {
            count++;
        }
    }
    console.log(`Number ${numberToFind} occurs ${count} times.`);
}


searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);