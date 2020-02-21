function sortArray(input) {
    let arr = [...input];
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(x => {
            console.log(x);
        });
}

sortArray(['alpha', 'beta', 'gamma']);
// beta
// alpha
// gamma
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// Jack
// Isacc
// George
// Theodor
// Harrison