function fromNto1(arguments) {
    let n = Number(arguments.shift());

    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

fromNto1([10]);