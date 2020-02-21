function multiplicationTable(arguments) {
    let num = arguments.shift();

    let first = Number(num.charAt(2));
    let second = Number(num.charAt(1));
    let third = Number(num.charAt(0));

    for (let i = 1; i <= first; i++) {
        for (let j = 1; j <= second; j++) {
            for (let k = 1; k <= third; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }
}

// multiplicationTable(["324"]);
multiplicationTable(["222"]);