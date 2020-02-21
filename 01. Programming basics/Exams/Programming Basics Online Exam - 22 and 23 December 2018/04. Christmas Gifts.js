function christmasGifts(arguments) {
    let command = arguments.shift();

    let kids = 0;
    let adults = 0;

    while (command != "Christmas") {
        let age = Number(command);
        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }

        command = arguments.shift();
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys ${kids * 5}`);
    console.log(`Money for sweaters: ${adults * 15}`);
}

// christmasGifts([16, 20, 46, 12, 8, 20, 49, "Christmas"]);
// christmasGifts([16, 16, 16, 16, 16, "Christmas"]);
christmasGifts([18, 20, 48, 45, 56, 37, 12, 14, "Christmas"]);