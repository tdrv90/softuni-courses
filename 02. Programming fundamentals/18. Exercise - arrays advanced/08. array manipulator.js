function arrayManipulator(arrOfInt, arrOfCommands) {
    let manipulatedArr = [...arrOfInt];

    for (let i = 0; i < arrOfCommands.length; i++) {
        let operations = arrOfCommands[i].split(' ');
        let command = operations[0];

        if (command === 'add') {
            // add
            manipulatedArr.splice(operations[1], 0, +operations[2]);
        } else if (command === 'addMany') {
            // addMany <index> <el1> <el2>
            operations.shift();
            let index = operations.shift();

            for (let j = 0; j < operations.length; j++) {
                let numberToBeAdded = +operations[j];
                manipulatedArr.splice(index + j, 0, numberToBeAdded);
            }
        } else if (command === 'contains') {
            // contains
            console.log(manipulatedArr.indexOf(+operations[1]));
        } else if (command === 'remove') {
            manipulatedArr.splice(operations[1], 1);
        } else if (command === 'shift') {
            // shift to the left with X positions
            let numberOfpositions = operations[1];

            for (let k = 0; k < numberOfpositions; k++) {
                let shiftedNum = manipulatedArr.shift();
                manipulatedArr.push(shiftedNum);
            }
        } else if (command === 'sumPairs') {
            // summing pairs
            manipulatedArr = manipulatedArr.map((e, i, manipulatedArr) => i < manipulatedArr.length - 1
                ? (manipulatedArr[i] += manipulatedArr[i + 1])
                : manipulatedArr[i] = manipulatedArr[i]).filter((e, i) => i % 2 === 0);
        } else if (command === 'print') {
            // stop receiving more operations and print last state of the array
            let finalArr = manipulatedArr.map(Number);
            console.log(finalArr);
            break;
        }
    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// // adding 
// let someArr = ['Gosho', 'Mosho', 'Tosho'];
// someArr.splice(1, 0, 'Vanio', 'Conko');
// console.log(someArr);