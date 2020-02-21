function demo(arguments) {
    let r = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`i: ${i}`);
        for (let j = 0; j < 5; j++) {
            console.log(` j: ${j}`);
            for (let k = 0; k <= 5; k++) {
                r++;
                console.log(`  k: ${k}`);
            }
        }
        console.log();
    }
    console.log(r);
}

demo();