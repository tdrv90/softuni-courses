function theIsleOfMan(input) {
    input.forEach(line => {
        let pattern = /([#$%\*\&])(?<racer>[A-Za-z]*)(\1)=(?<key>[0-9]+)!!(?<geohashcode>.*)/g;
        let regexOutput = pattern.exec(line);
        let decryptedCoordinates = [];

        if (regexOutput !== null) {
            let racer = regexOutput.groups.racer;
            let key = Number(regexOutput.groups.key);
            let geohashcode = regexOutput.groups.geohashcode;

            if (key === geohashcode.length) {
                for (let i = 0; i < geohashcode.length; i++) {
                    let char = geohashcode[i];

                    let newChar = String.fromCharCode(char.charCodeAt() + key);
                    decryptedCoordinates.push(newChar);
                }

                decryptedCoordinates = decryptedCoordinates.join('');
                console.log(`Coordinates found! ${racer} -> ${decryptedCoordinates}`);
            } else {
                console.log(`Nothing found!`);
            }

        } else {
            console.log(`Nothing found!`);
        }
    });
}

theIsleOfMan(['Ian6Hutchinson=7!!\\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd']
);