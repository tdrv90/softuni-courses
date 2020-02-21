function townsAsObjects(input) {
    let towns = [];

    for (let line of input) {
        line = line.split(" | ");
        let town = line[0];
        let latitude = +line[1];
        latitude = latitude.toFixed(2);
        let longitude = +line[2];
        longitude = longitude.toFixed(2);

        let newTown = {
            town: town,
            latitude: latitude,
            longitude: longitude
        }

        towns.push(newTown);
    }
    towns.forEach(x => console.log(x));
}

townsAsObjects(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);