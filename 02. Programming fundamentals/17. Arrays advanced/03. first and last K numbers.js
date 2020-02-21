function firstAndLastKnumbers(arguments) {
    let k = arguments.shift();

    let firstPart = arguments.slice(0, k);
    let secondPart = arguments.slice(arguments.length - k, arguments.length);

    console.log(firstPart.join(' '));
    console.log(secondPart.join(' '));
}

firstAndLastKnumbers([2, 7, 8, 9]);
// firstAndLastKnumbers([3, 6, 7, 8, 9]);