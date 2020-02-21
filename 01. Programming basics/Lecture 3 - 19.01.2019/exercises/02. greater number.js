function greaterNumber(arguments) {
    let number1 = Number(arguments.shift());
    let number2 = Number(arguments.shift());

    if (number1 > number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}

greaterNumber([3, 5]);
greaterNumber([5, 3]);
greaterNumber([10, 10]);
greaterNumber([-10, 10]);