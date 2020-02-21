function solve(size = 5) {
    let result = new Array(size);

    for (let i = 0; i < size; i++) {
        result[i] = "* ".repeat(size).trim();
    }

    return result.join("\n");
}

console.log(solve());
console.log(solve(2));
console.log(solve(4));