function weddingTime (arguments) {
    let whiskeyPrice = Number(arguments.shift());
    let waterLiters = Number(arguments.shift());
    let wineLiters = Number(arguments.shift());
    let champagneLiters = Number(arguments.shift());
    let whiskeyLiters = Number(arguments.shift());

    let champagnePrice = whiskeyPrice * 0.50;
    let winePrice = champagnePrice - (champagnePrice * 0.60);
    let waterPrice = champagnePrice - (champagnePrice * 0.90);

    let total = (whiskeyLiters * whiskeyPrice) + (waterLiters * waterPrice) + (wineLiters * winePrice) + (champagneLiters * champagnePrice);
    console.log(total.toFixed(2));
}

weddingTime([50, 10, 3.5, 6.5, 1]);
weddingTime([63.44, 3.57, 6.35, 8.15, 2.5]);