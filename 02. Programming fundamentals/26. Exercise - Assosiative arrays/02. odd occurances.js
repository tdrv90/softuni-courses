function oddObject(input) {
    let elements = input.split(' ');
    let itemOccurence = {};

    for (let word of elements) {
        word = word.toLowerCase();
        if (!itemOccurence.hasOwnProperty(word)) {
            itemOccurence[word] = 1;
        } else {
            itemOccurence[word]++;
        }
    }

    let filteredOccurence = Object.entries(itemOccurence);
    let output = "";

    for (const [word, occurance] of filteredOccurence) {
        if (occurance % 2 === 1) {
            output += `${word} `;
        }    
    }
    console.log(output);
}

oddObject('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');