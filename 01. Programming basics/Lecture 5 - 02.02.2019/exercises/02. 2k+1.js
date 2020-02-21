function twoKPlusOne(arguments) {
    let number = Number(arguments.shift());

    let k = 1;

    while (k <= number) {
        console.log(k);
        k = k * 2 + 1;
    }
}

twoKPlusOne([31]);