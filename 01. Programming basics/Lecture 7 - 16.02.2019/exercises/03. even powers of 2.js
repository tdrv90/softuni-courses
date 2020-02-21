function evenPowersOfTwo(arguments) {
    let n = Number(arguments.shift());

    for (let i = 0; i <= n; i += 2) {
        console.log(`${Math.pow(2, i)} / ${i}`);
    }
}

evenPowersOfTwo([10]);