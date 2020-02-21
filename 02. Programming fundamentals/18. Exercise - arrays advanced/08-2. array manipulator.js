function arrayManipulator(arrOfInt, arrOfCommands) {
    let manipulatedArr = [...arrOfInt];

    let commands = arrOfCommands.shift().split(' ');

    while (commands[0] !== 'print') {

        if (commands[0] === 'add') {
            manipulatedArr.splice(commands[1], 0, +commands[2]);
        } else if (commands[0] === 'addMany') {
            let index = +commands[1];

            for (let i = 0; i < commands.length - 2; i++) {
                let nrToBeAdded = +commands[i + 2];
                manipulatedArr.splice(index + i, 0, nrToBeAdded);
            }
        } else if (commands[0] === 'contains') {
            console.log(manipulatedArr.indexOf(+commands[1]));
        } else if (commands[0] === 'remove') {
            manipulatedArr.splice(commands[1], 1);
        } else if (commands[0] === 'shift') {
            let numberOfPositions = +commands[1];

            for (let k = 0; k < numberOfPositions; k++) {
                let shiftedNum = manipulatedArr.shift();
                manipulatedArr.push(shiftedNum);
            }
        } else if (commands[0] === 'sumPairs') {
            manipulatedArr = manipulatedArr.map((e, i, manipulatedArr) => i < manipulatedArr.length - 1
                ? (manipulatedArr[i] += manipulatedArr[i + 1])
                : manipulatedArr[i] = manipulatedArr[i]).filter((e, i) => i % 2 === 0);
        }

        commands = arrOfCommands.shift().split(' ');
    }

    console.log(manipulatedArr);
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// // adding 
// let someArr = ['Gosho', 'Mosho', 'Tosho'];
// someArr.splice(1, 0, 'Vanio', 'Conko');
// console.log(someArr);