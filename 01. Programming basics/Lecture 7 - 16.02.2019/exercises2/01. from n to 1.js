function fromNto1(arguments) {
    let n = Number(arguments.shift());
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

fromNto1([10]);