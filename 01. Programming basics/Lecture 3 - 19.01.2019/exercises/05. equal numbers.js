function equalNumbers (arguments) {
    let n1 = Number(arguments.shift());
    let n2 = Number(arguments.shift());
    let n3 = Number(arguments.shift());

    if (n1 == n2 && n2 == n3) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

equalNumbers([5, 5, 5]);
equalNumbers([5, 5, 2]);
equalNumbers([3, 3, 311]);