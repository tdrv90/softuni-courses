function evenOdd (arguments) {
    let number = Number(arguments.shift());

    if (number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOdd([2]);
evenOdd([3]);
