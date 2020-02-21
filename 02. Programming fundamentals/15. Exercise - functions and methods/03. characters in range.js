function charactersInrange(a, b) {
    let firstChar = a.charCodeAt(0);
    let secondChar = b.charCodeAt(0);

    let printLine = '';
    if (firstChar < secondChar) {
        for (let i = firstChar + 1; i < secondChar; i++) {
            printLine += `${String.fromCharCode(i)} `;
        }
    } else {
        for (let i = secondChar + 1; i < firstChar; i++) {
            printLine += `${String.fromCharCode(i)} `;
        }
    }
    return printLine;
}

console.log(charactersInrange('a', 'd'))
console.log(charactersInrange('#', ':'))
console.log(charactersInrange('C', '#'))