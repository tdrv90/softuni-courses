function numbers1to9 (arguments) {
    let input = Number(arguments.shift());
    let output = "number too big";

    if (input == 1) {
        output = "one";
    } else if (input == 2) {
        output = "two";
    } else if (input == 3) {
        output = "three";
    } else if (input == 4) {
        output = "four";
    } else if (input == 5) {
        output = "five";
    } else if (input == 6) {
        output = "six";
    } else if (input == 7) {
        output = "seven";
    } else if (input == 8) {
        output = "eight";
    } else if (input == 9) {
        output = "nine";
    }

    console.log(output);
}

numbers1to9([1]);
numbers1to9([3]);
numbers1to9([6]);
numbers1to9([1]);
numbers1to9([8]);
numbers1to9([9]);
numbers1to9([10]);