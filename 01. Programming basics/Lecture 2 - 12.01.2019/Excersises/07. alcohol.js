function alcoholMarket (arguments) {
    // entry data
    let whiskeyPrice = Number(arguments.shift());
    let beerQuantity = Number(arguments.shift());
    let wineQuantity = Number(arguments.shift());
    let rakiaQuantity = Number(arguments.shift());
    let whiskeyQuantity = Number(arguments.shift());

    // calculations
    let rakiaPrice = whiskeyPrice * 0.5;
    let winePrice = rakiaPrice - (rakiaPrice * 0.40);
    let beerPrice = rakiaPrice - (rakiaPrice * 0.80);
    let totalPrice = (whiskeyPrice * whiskeyQuantity) + (beerPrice * beerQuantity) + (winePrice * wineQuantity) + (rakiaPrice * rakiaQuantity);

    console.log(totalPrice.toFixed(2));
}

alcoholMarket([63.44, 3.57, 6.35, 8.15, 2.50]);