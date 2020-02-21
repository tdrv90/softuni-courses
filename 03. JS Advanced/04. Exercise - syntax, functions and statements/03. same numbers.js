function sameNumbers(num) {
    num = num.toString().split("").map(Number);
    let sum = num.reduce((a, b) => a + b);

    let firstNum = num[0];

    let result = ""
    for (let i = 1; i < num.length; i++) {
        if (firstNum !== num[i]) {
            result = "false";
            break;
        }
    }
    if (result !== "false") {
        result = "true";
    }
    return result + "\n" + sum;
}

console.log(sameNumbers(2222222));
// true
// 14

console.log(sameNumbers(1234));
// false
// 10