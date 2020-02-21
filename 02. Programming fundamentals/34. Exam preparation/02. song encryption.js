function songEncryption(input) {
    for (let line of input) {
        if (line === 'end') {
            break;
        }

        if (!/^[A-Z][a-z\s']*:[A-Z\s]*$/g.test(line)) {
            console.log(`Invalid input!`);
            continue;
        }

        let [artist,] = line.split(':');
        let key = artist.length;

        let encryptedLine = '';

        for (let char of line) {
            if (char === ':') {
                encryptedLine += '@';
                continue;
            }

            let charAscii = char.charCodeAt(0);

            if (charAscii >= 65 && charAscii <= 90) {
                charAscii += key;
                if (charAscii > 90) {
                    charAscii -= 26;
                }
            }

            if (charAscii >= 97 && charAscii <= 122) {
                charAscii += key;
                if (charAscii > 122) {
                    charAscii -= 26;
                }
            }

            encryptedLine += String.fromCharCode(charAscii);
        }

        console.log(`Successful encryption: ${encryptedLine}`);
    }
}

// songEncryption(['Eminem:VENOM',
//     'Linkin park:NUMB',
//     'Drake:NONSTOP',
//     'Adele:HELLO',
//     'end']
// );


songEncryption([
    "Michael Jackson:ANOTHER PART OF ME",
    "Adele:ONE AND ONLY",
    "Guns n\'roses:NOVEMBER RAIN",
    "Christina Aguilera: HuRt",
    "end"
]);