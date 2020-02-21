function reverseString (arguments) {
    let reversed = arguments.split("").reverse().join("");

    console.log(reversed);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");