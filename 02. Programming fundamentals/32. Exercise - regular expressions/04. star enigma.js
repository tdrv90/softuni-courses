function starEnigma(input) {
    let numOfMessages = Number(input.shift());

    input.forEach((message) => {
        let starPattern = /[star]/gi;
        let countLettersSTAR = message.match(starPattern);

        let decryptedMessage = '';
        for (let i = 0; i < message.length; i++) {
            decryptedMessage += String.fromCharCode(message.charCodeAt(i) - countLettersSTAR.length);
        }

        // let enigmaPattern = /@(?<planet>[A-Za-z]+)[\s\d]*\:(?<population>[\d]+)\!(?<type>[A-Z])\!->(?<soldier>[\d]+)/g;

        // let asd = enigmaPattern.exec(decryptedMessage);
    })
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
);

console.log();

starEnigma([
    "3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT",
    "EHfsytsnhf?8555&I&2C9555SR"
])