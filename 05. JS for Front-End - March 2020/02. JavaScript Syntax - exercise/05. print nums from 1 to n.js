function printFrom1ToN(num) {
    let output = '';

    for (let i = 1; i <= num; i++) {
        output += i + "\n";

    }

    return output;
}

console.log(printFrom1ToN(5));