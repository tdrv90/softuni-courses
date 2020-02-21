function oldLibrary(arguments) {
    let wantedBook = arguments.shift();
    let librarySize = arguments.shift();

    let counter = 0;
    let bookIsFound = false;
    let nextBook = arguments.shift();

    while (counter <= librarySize) {
        if (nextBook == wantedBook) {
            bookIsFound = true;
            break;
        }
        
        counter++;
        nextBook = arguments.shift();
    }

    if (bookIsFound == false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${librarySize} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }
}

// oldLibrary(["Troy", "8", "Stronger", "Life Style", "Troy"]);
// oldLibrary(["Bourne", "32", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
oldLibrary(["The Spot", 4, "Harry Potter", "Toronto", "Hunger Games", "Spotify"]);