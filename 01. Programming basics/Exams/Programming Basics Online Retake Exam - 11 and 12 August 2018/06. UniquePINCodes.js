function uniquePinCodes(arguments) {
    let num1 = Number(arguments.shift());
    let num2 = Number(arguments.shift());
    let num3 = Number(arguments.shift());


    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= num2; j++) {
            for (let k = 1; k <= num3; k++) {
                //• Първата и третата цифра трябва да бъдат четни.
                if (i % 2 == 0 && k % 2 == 0) {
                    //• Втората цифра трябва да бъде просто число в диапазона [2...7].
                    if (j == 2 || j == 3 || j == 5 || j == 7) {
                        console.log(`${i} ${j} ${k}`)
                    }
                }
            }
        }
    }
}

// uniquePinCodes([3, 5, 5]);
uniquePinCodes([8, 2, 8]);