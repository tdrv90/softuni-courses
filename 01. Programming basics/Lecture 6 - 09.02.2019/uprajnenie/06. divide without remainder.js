function dividingWithoutRemainder(arguments) {
    let n = Number(arguments[0]);

    let on2 = 0;
    let on3 = 0;
    let on4 = 0;


    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);

        if (num % 2 === 0) {
            on2++;
        }
        if (num % 3 === 0) {
            on3++;
        }
        if (num % 4 === 0) {
            on4++;
        }

    }

    let dividedOn2 = on2 / n * 100;
    let dividedOn3 = on3 / n * 100;
    let dividedOn4 = on4 / n * 100;

    console.log(`${dividedOn2.toFixed(2)}%`);
    console.log(`${dividedOn3.toFixed(2)}%`);
    console.log(`${dividedOn4.toFixed(2)}%`);
}

// dividingWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
dividingWithoutRemainder([3, 3, 6, 9]);