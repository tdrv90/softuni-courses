function challengeTheWedding(arguments) {
    let males = Number(arguments.shift());
    let females = Number(arguments.shift());
    let maxTables = Number(arguments.shift());

    let countTables = 0;
    let output = "";


    for (let m = 1; m <= males; m++) {
        for (let f = 1; f <= females; f++) {
            countTables++;
            if (countTables <= maxTables) {
                output += `(${m} <-> ${f}) `;
            }
        }
    }

    console.log(output);
}

challengeTheWedding([2, 2, 6]);
challengeTheWedding([2, 2, 3]);
challengeTheWedding([5, 8, 40]);