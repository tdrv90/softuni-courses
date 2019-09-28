function printAnArray(input) {
    let delimiter = input.pop();

    console.log(input.join(delimiter));
}

printAnArray(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);

printAnArray(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']);