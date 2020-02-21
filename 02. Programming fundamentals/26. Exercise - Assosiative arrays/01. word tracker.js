function wordsTracker(input) {
    let words = input.shift().split(' ');
    
    let wordsCount = {};

    for (const word of words) {
        wordsCount[word] = 0;
    }

    for (const currentWord of input) {
        if (wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord]++;
        }
    }

    let sortedWords = Object.entries(wordsCount).sort((a,b) => {
        let [, firstOccurance] = a;
        let [, secondOccurance] = b;

        return secondOccurance - firstOccurance;
    });

    for (const [word, occurance] of sortedWords) {
        console.log(`${word} - ${occurance}`);
    }
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);