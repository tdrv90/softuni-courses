function footballKit(arguments) {
    let tshirt = Number(arguments.shift());
    let targetForPrize = Number(arguments.shift());

    let shorts = tshirt * 0.75;
    let socks = shorts * 0.20;
    let shoes = 2 * (tshirt + shorts);

    let total = tshirt + shorts + socks + shoes;
    total *= 0.85;
    let diff = total - targetForPrize;
    if (total >= targetForPrize) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${total.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(Math.abs(diff)).toFixed(2)} lv. more.`);
    }
}

footballKit([25, 100]);
footballKit([55, 310]);
footballKit([59.99, 500]);