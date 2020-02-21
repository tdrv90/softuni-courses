function oldLibrary(arguments) {
    let wantedBook = arguments.shift();
    let librarySize = Number(arguments.shift());

    let bookCounter = 0;
    let nextBook = arguments.shift();

    while (bookCounter < librarySize) {
        if (nextBook == wantedBook) {
            break;
        }
        bookCounter++;
        nextBook = arguments.shift();
    }
    if (nextBook == wantedBook) {
        console.log(`You checked ${bookCounter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${librarySize} books.`);
    }
}

oldLibrary(["Troy", 8, "Stronger", "Life Style", "Troy"]);