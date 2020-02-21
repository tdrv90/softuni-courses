function fromOneToNPlusThree(arguments) {
    let n = Number(arguments.shift());

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

fromOneToNPlusThree([16]);