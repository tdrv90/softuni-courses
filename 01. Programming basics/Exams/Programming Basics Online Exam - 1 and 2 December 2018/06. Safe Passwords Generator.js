function safePasswordGenerator(arguments) {
    let a = Number(arguments.shift());
    let b = Number(arguments.shift());
    let allowedPasswordCombinations = Number(arguments.shift());

    let passwords = "";
    let counter = 0;

    let charA = 35;
    let charB = 64;

    for (i = 1; i <= a; i++) {
        for (j = 1; j <= b; j++) {
            if (counter <= allowedPasswordCombinations) {
                passwords += `${String.fromCharCode(charA)}${String.fromCharCode(charB)}${i}${j}${String.fromCharCode(charB)}${String.fromCharCode(charA)}|`;
            }

            charA++;
            charB++;
            allowedPasswordCombinations--;

            if (charA == 56) {
                charA = 35;
            }
            if (charB == 97) {
                charB == 64;
            }
            counter++;
        }

    }
    console.log(passwords);
}

// safePasswordGenerator([2, 3, 10]);
safePasswordGenerator([20, 50, 10]);
