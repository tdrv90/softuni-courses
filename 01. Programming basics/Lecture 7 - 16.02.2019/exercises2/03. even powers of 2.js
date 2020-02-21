function evenPowersOf2 (arguments) {
    let n = Number(arguments.shift());

    let current = 1;

    for (let i = 0; i <= n; i +=2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOf2([5]);