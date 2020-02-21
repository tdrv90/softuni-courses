function finalQuest(input) {
    let words = input
        .shift()
        .split(' ');

    for (let line of input) {
        if (line === 'Stop') {
            break;
        }
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Delete') {
            let deleteIndex = Number(tokens[1]);
            deleteWord(deleteIndex);
        } else if (command === 'Swap') {
            let first = tokens[1];
            let second = tokens[2];
            swapWord(first, second);
        } else if (command === 'Put') {
            let myWord = tokens[1];
            let index = Number(tokens[2]);
            putWord(myWord, index);
        } else if (command === 'Sort') {
            words.sort(sortWordsByDescending);
        } else if (command === 'Replace') {
            let first = tokens[1];
            let second = tokens[2];
            replaceWord(first, second);
        }
    }

    function deleteWord(index) {
        if (index >= 0 && index <= words.length) {
            words.splice(index + 1, 1);
        }
    }

    function swapWord(word1, word2) {
        let indexOfFirst = words.indexOf(word1);
        let indexOfSecond = words.indexOf(word2);

        if (indexOfFirst !== -1 && indexOfSecond !== -1) {
            words[indexOfFirst] = word2;
            words[indexOfSecond] = word1;
        }
    }

    function putWord(word, index) {
        index--;
        if (index >= 0 && index <= words.length) {
            words.splice(index, 0, word);
        }
    }

    function sortWordsByDescending(a, b) {
        return b.localeCompare(a);
    }

    function replaceWord(word1, word2) {
        let secondWordIndex = words.indexOf(word2);

        if (secondWordIndex >= 0 && secondWordIndex < words.length) {
            words[secondWordIndex] = word1;
        }
    }

    console.log(words.join(' '));
}

finalQuest(
    ['Congratulations! You last also through the have challenge!',
        'Swap have last',
        'Replace made have',
        'Delete 2',
        'Put it 4',
        'Stop',
        '']
);
console.log();
finalQuest(['This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    '']
);