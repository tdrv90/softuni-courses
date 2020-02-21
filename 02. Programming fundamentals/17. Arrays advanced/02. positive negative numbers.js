function positiveNegativeNumbers(arguments) {
    let output = [];

    arguments.forEach((item) => {
        let num = Number(item);
        (num < 0) ? output.unshift(num) : output.push(num);
    });

    return output.join('\n');
}

// console.log(positiveNegativeNumbers([7, -2, 8, 9]));
console.log(positiveNegativeNumbers([3, -2, 0, -1]));