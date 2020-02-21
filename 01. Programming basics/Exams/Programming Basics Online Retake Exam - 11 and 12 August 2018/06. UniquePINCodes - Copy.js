function uniquePinCodes(args) {
    let num1 = Number(args.shift());
    let num2 = Number(args.shift());
    let num3 = Number(args.shift());

    for (let i = 0; i <= num1; i++) {
        for (let j = 0; j <= num2; j++) {
            for (let k = 0; k <= num3; k++) {
                if (i % 2 == 0 && k % 2 == 0) {
                    if (j == 2 || j == 3 || j == 5 || j == 7) {
                        console.log(`${i} ${j} ${k}`);
                    }
                }
            }
    
        }
        
    }
}

uniquePinCodes([3, 5, 5]);
// uniquePinCodes([8, 2, 8]);