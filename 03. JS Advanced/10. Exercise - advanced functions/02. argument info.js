function argumentInfo() {
    let typeCounts = {};
    for (let arg of arguments) {
        console.log(`${typeof (arg)}: ${arg}`);
        if (!typeCounts[typeof (arg)]) {
            typeCounts[typeof (arg)] = 1;
        } else {
            typeCounts[typeof (arg)]++;
        }
    }

    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))
}

function argumentInfo2(...input) {
    Object.entries(
        input.reduce((previous, current) => {
            let type = typeof current;
            console.log(`${type}: ${current}`);

            if (!previous.hasOwnProperty(type)) {
                previous[type] = 0;
            }

            previous[type]++;

            return previous;
        }, {})
    )
        .map(([type, count]) => `${type} = ${count}`)
        .forEach((el) => console.log(el));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo2('cat', 42, function () { console.log('Hello world!'); });