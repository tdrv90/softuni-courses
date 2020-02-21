function revealWords(words, str) {
    let wordsTobeRevealed = words.split(', ');

    for (const word of wordsTobeRevealed) {
        let asterisksWord = '*'.repeat(word.length);
        str = str.replace(asterisksWord, word);
    }
    console.log(str);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
console.log();
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);