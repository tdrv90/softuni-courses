function twoKplusOne(arg) {
    let number = Number(arg.shift());

    let k = 1;

    while (k <= number) {
        console.log(k);
        k = k * 2 + 1;
    }
}

twoKplusOne([578]);