function usdToBgn (arguments) {
    let value = Number(arguments.shift());

    value *= 1.79549;
    console.log(value.toFixed(2));
}

usdToBgn([20]);