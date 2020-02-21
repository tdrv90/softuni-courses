function celsiusToFarenheit ([arg1]) {
    let c = parseFloat(arg1);

    let f = (c * 9/5) + 32;
    console.log(f.toFixed(2));
}

celsiusToFarenheit([25]);