function histogram(arguments) {
    let n = Number(arguments[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(arguments[i]);

        if (num < 200) {
            p1++;
        } else if (num < 400) {
            p2++;
        } else if (num < 600) {
            p3++;
        } else if (num < 800) {
            p4++;
        } else if (num >= 800 && num <= 1000) {
            p5++;
        }
    }
    let percentage1 = p1 / n * 100;
    let percentage2 = p2 / n * 100;
    let percentage3 = p3 / n * 100;
    let percentage4 = p4 / n * 100;
    let percentage5 = p5 / n * 100;

    console.log(`${percentage1.toFixed(2)}%`)
    console.log(`${percentage2.toFixed(2)}%`)
    console.log(`${percentage3.toFixed(2)}%`)
    console.log(`${percentage4.toFixed(2)}%`)
    console.log(`${percentage5.toFixed(2)}%`)
}

// histogram([3, 1, 2, 999]);
// histogram([4, 53, 7, 56, 999]);
// histogram([7, 800, 801, 250, 199, 399, 599, 799]);
// histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);