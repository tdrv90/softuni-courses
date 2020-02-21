function triplesOfLatinLetters(n) {
    for (let i = 0; i < n; i++) {
        let letter1 = String.fromCharCode(97 + i);
        for (let k = 0; k < n; k++) {
            let letter2 = String.fromCharCode(97 + k);
            for (let j = 0; j < n; j++) {
                let letter3 = String.fromCharCode(97 + j);
                console.log(`${letter1}${letter2}${letter3}`)
            }
        }
    }
}


triplesOfLatinLetters(3);