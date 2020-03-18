function printFrom1ToN(num) {
    let output = '';

    for (let i = num; i >= 1; i--) {
        output += i + "\n";

    }

    return output;
}

console.log(printFrom1ToN(5));