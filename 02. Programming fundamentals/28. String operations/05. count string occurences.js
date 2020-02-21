function countStringOccurences(text, searchedWord) {
    let counter = 0;
    let words = text.split(' ');

    for (const word of words) {
        if (word === searchedWord) {
            counter++;
        }
    }
    console.log(counter);
}

countStringOccurences("This is a word and it also is a sentence", "is");