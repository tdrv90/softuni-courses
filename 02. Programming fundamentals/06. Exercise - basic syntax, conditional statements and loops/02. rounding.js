function rounding(arg1, arg2) {
    let num = Number(arg1);
    let precision = Number(arg2);

    if (precision > 15) {
        precision = 15;
    }

    let precisedNr = num.toFixed(precision);
    let output = parseFloat(precisedNr);

    console.log(output);
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);