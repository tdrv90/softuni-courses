function equalWords (arguments) {
    let word1 = arguments.shift().toLowerCase();
    let word2 = arguments.shift().toLowerCase();

    // word1 = word1.toLowerCase();
    // word2 = word2.toLowerCase();

    if (word1 == word2) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

equalWords(["Hello", "Hello"]);
equalWords(["SoftUni", "softuni"]);
equalWords(["Soft", "Uni"]);
equalWords(["HelLo", "hEllO"]);

