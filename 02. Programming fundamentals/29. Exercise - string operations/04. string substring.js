function stringSubstring(word, str) {
    word = word.toLowerCase();
    str = str.toLowerCase();

    if (str.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
);

console.log();

stringSubstring('python',
    'JavaScript is the best programming language'
);