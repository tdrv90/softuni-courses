function townsObj(input) {
    let towns = [];

    for (let line of input) {
        let [name, latitude, longitude] = line.split(' | ');

        latitude = +latitude;
        longitude = +longitude;
        latitude = latitude.toFixed(2);
        longitude = longitude.toFixed(2);

        let newTown = {
            town: name,
            latitude: latitude,
            longitude: longitude
        }

        towns.push(newTown);
    }

    towns.forEach(eachTown => {
        console.log(eachTown);
    });
}

townsObj(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']
);