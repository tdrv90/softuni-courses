function rightPlace(string, char, result) {
    let editedWord = string.replace("_", char);
    if (editedWord === result) {
        console.log("Matched");
    } else {
        console.log("Not matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')