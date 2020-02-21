function radToDeg (arguments) {
    let value = parseFloat(arguments.shift());
    value = value * 180 / Math.PI;
    console.log(value.toFixed(0));
}

radToDeg([3.1416]);
radToDeg([6.2832]);
radToDeg([0.7854]);
radToDeg([0.5236]);