function toNplus3(arguments) {
    let n = Number(arguments.shift());

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

toNplus3([25]);