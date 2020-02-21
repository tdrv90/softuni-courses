function lettersChangeNumbers(input) {
    const isUpperCase = (symbol) => {
        return symbol === symbol.toUpperCase();
    };

    let words = input.split(' ')
        .filter((el) => el !== '');
    let totalSum = 0;

    for (let word of words) {
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let number = Number(word.substring(1, word.length - 1));
        let firstAscii = firstLetter.toLowerCase().charCodeAt(0);
        let lastAscii = lastLetter.toLowerCase().charCodeAt(0);

        if (isUpperCase(firstLetter)) {
            totalSum += number / (firstAscii - 96);
        } else {
            totalSum += number * (firstAscii - 96);
        }

        if (isUpperCase(lastLetter)) {
            totalSum -= lastAscii - 96;
        } else {
            totalSum += lastAscii - 96;
        }
    }

    console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');