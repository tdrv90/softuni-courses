function multiplicationTable(arguments) {
    let num = arguments.shift();

    for (let i = 1; i <= num[2]; i++) {
        for (let j = 1; j <= num[1]; j++) {
            for (let k = 1; k <= num[0]; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k}`);
            }
        }
    }
}

multiplicationTable(["324"]);