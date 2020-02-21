function sortNumbers(arg1, arg2, arg3) {
    let arr = [];
    arr.push(arg1);
    arr.push(arg2);
    arr.push(arg3);
    arr.sort(function (a, b) { return b - a });

    let num1 = arr.shift();
    console.log(+num1);
    let num2 = arr.shift();
    console.log(+num2);
    let num3 = arr.shift();
    console.log(+num3);
}

sortNumbers(2, 1, 3)