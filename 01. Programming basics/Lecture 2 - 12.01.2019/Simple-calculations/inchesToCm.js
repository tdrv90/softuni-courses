function inToCm ([arg1]) {
    let inches = parseFloat(arg1);

    let cm = inches * 2.54;
    console.log(cm.toFixed(2));
}

inToCm([100]);