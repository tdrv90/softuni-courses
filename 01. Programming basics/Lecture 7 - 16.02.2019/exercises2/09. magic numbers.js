function magicNumber(arguments) {
    let num = Number(arguments.shift());

    let container = "";

    for (let x1 = 0; x1 <= 9; x1++) {
        for (let x2 = 0; x2 <= 9; x2++) {
            for (let x3 = 0; x3 <= 9; x3++) {
                for (let x4 = 0; x4 <= 9; x4++) {
                    for (let x5 = 0; x5 <= 9; x5++) {
                        for (let x6 = 0; x6 <= 9; x6++) {
                            if (x1*x2*x3*x4*x5*x6 == num) {
                                container += `${x1}${x2}${x3}${x4}${x5}${x6} `;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(container);
}

magicNumber([2]);
magicNumber([8]);
magicNumber([531441]);