function lowerOrUpperCase(character) {
    let result = character === character.toUpperCase() ? "upper-case" : "lower-case";
    return result;
}

console.log(lowerOrUpperCase("L"));
console.log(lowerOrUpperCase("f"));