function systemComponents(input) {
    let database = {};

    input.forEach(line => {
        let [system, comp, subcomp] = line.split(" | ");

        if (!database.hasOwnProperty(system)) {
            database[system] = {
                [comp]: [subcomp]
            }
        } else {
            if (database[system].hasOwnProperty(comp)) {
                database[system][comp].push(subcomp);
            } else {
                database[system][comp] = [subcomp];
            }
        }
    });

    let sortedSystems = Object.entries(database)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(element[0]);

            Object.entries(element[1])
                .sort((a, b) => b[1].length - a[1].length)
                .forEach(el => {
                    console.log(`|||${el[0]}`);
                    el[1].forEach(elem => {
                        console.log(`||||||${elem}`);
                    })
                })

        });
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);