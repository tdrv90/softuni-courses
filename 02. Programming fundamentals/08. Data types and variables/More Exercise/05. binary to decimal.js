function binaryToDecimal (binary) {
    binary = String(binary);
    let decimal = parseInt(binary, 2);

    return decimal;
}

console.log(binaryToDecimal("00001001"));