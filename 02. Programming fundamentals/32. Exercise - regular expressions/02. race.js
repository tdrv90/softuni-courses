function race(input) {
    let participants = input.shift().split(', ');
    let results = {};

    const namePattern = /[^a-zA-Z]/g;
    const distancePattern = /[^0-9]/g;

    let currentParticipant = input.shift();
    while (currentParticipant !== 'end of race') {
        let name = currentParticipant.split(namePattern)
            .filter((x) => x)
            .join('');

        let distance = currentParticipant.split(distancePattern)
            .filter((x) => x)
            .join('')
            .split('')
            .reduce((a, b) => Number(a) + Number(b), 0);

        if (participants.includes(name)) {
            if (!results.hasOwnProperty(name)) {
                results[name] = distance;
            } else {
                results[name] += distance;
            }
        }

        currentParticipant = input.shift();
    }

    results = Object.entries(results)
        .sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${results[0][0]}`);
    console.log(`2nd place: ${results[1][0]}`);
    console.log(`3rd place: ${results[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)