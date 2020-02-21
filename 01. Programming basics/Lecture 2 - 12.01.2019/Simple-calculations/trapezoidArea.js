function trapezoid ([arg1, arg2, arg3]) {
    let a = parseFloat(arg1);
    let b = parseFloat(arg2);
    let h = parseFloat(arg3);

    let trapezoidArea = (a + b) * h / 2;
    console.log(trapezoidArea.toFixed(2));
}

trapezoid([8, 13, 7]);