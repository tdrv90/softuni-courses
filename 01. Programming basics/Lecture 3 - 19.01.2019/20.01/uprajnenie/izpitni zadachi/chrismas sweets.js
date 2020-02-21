function christmasSweets (arguments) {
    let baklavaPrice = Number(arguments.shift());
    let muffinPrice = Number(arguments.shift());
    let shtollenQuantity = Number(arguments.shift());
    let candyQuantity = Number(arguments.shift());
    let cookiesQuantity = Number(arguments.shift());

    let shtollenPrice = baklavaPrice * 1.60;
    let candyPrice = muffinPrice * 1.80;
    let cookiesPrice = 7.50;

    let sum = (shtollenPrice * shtollenQuantity) + (candyPrice * candyQuantity) + (cookiesPrice * cookiesQuantity);

    console.log(sum.toFixed(2));
}

christmasSweets([6.90, 4.20, 1.5, 2.5, 1]);
christmasSweets([5.55, 3.57, 4.3, 3.6, 7]);
christmasSweets([7.79, 5.35, 9.3, 0, 0]);