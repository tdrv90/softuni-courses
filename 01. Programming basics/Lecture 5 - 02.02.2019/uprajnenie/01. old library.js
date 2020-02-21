function oldLibrary(arguments) {
    let wantedBook = arguments.shift();
    let librarySize = Number(arguments.shift());

    let counter = 0;
    let bookIsFound = false;
    let nextBookName = arguments.shift();

    while (counter < librarySize) {
        if (nextBookName == wantedBook) {
            bookIsFound = true;
            break;
        }
        counter++;
        nextBookName = arguments.shift();
    }

    if (bookIsFound == false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }
}

oldLibrary(["Troy", "8", "Stronger", "Life Style", "Troy"]);
oldLibrary(["Bourne", "32", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);