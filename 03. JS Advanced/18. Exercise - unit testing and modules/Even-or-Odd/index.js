function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return null;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


module.exports = isOddOrEven;