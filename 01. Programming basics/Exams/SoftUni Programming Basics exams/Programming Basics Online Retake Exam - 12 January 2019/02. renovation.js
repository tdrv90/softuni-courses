function renovation (arguments) {
    let budget = Number(arguments.shift());
    let floorWidth = Number(arguments.shift());
    let floorLength = Number(arguments.shift());
    let triangleSide = Number(arguments.shift());
    let triangleHeight = Number(arguments.shift());
    let tilePrice = Number(arguments.shift());
    let tilePlacingCost = Number(arguments.shift());

    let floorArea = floorLength * floorWidth;
    let tileArea = triangleHeight * triangleSide / 2;
    let neccessaryTiles = Math.ceil(floorArea / tileArea);
    neccessaryTiles += 5;

    let totalSum = (tilePrice * neccessaryTiles) + tilePlacingCost;

    let diff = budget - totalSum;

    if (totalSum <= budget) {
        console.log(`${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`You'll need ${Math.abs(diff.toFixed(2))}`);
    }
}

renovation([500, 3, 2.5, 0.5, 0.7, 7.80, 100]);
renovation([1000,
    5.55,
    8.95,
    0.90,
    0.85,
    13.99,
    321]);