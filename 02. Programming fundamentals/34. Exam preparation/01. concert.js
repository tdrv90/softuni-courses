function concert(input) {
    let membersOfBands = {};
    let playTime = {};
    let totalTime = 0;
    let bandNameToPrint = input.pop();

    for (let line of input) {
        if (line === 'start of concert') {
            console.log(`Total time: ${totalTime}`);

            let sortedTime = Object.entries(playTime)
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

            for (let band of sortedTime) {
                let [nameOfBand, time] = band;

                console.log(`${nameOfBand} -> ${time}`);
            }

            console.log(bandNameToPrint);
            let membersOfBandToPrint = membersOfBands[bandNameToPrint];
            for (const mem of membersOfBandToPrint) {
                console.log(`=> ${mem}`);
            }

        } else {
            let [command, bandName, values] = line.split('; ');

            if (command === 'Play') {
                let time = Number(values);
                
                if (!playTime.hasOwnProperty(bandName)) {
                    playTime[bandName] = 0;
                }

                playTime[bandName] += time;
                totalTime += time;
            } else if (command === 'Add') {
                let members = values.split(', ');

                if (!membersOfBands.hasOwnProperty(bandName)) {
                    membersOfBands[bandName] = [];
                }

                for (let member of members) {
                    if (!membersOfBands[bandName].includes(member)) {
                        membersOfBands[bandName].push(member);
                    }
                }
            }
        }
    }
}


concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']
);