function triangle ([arg1, arg2]) {
    let a = parseFloat(arg1);
    let h = parseFloat(arg2);

    let triangleArea = a * h / 2;
    console.log(triangleArea.toFixed(2));
}

triangle([20, 30]);