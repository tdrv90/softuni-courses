function cityInfo(name, area, population, country, postCode) {
    let city = {
        name,
        area,
        population,
        country,
        postCode
    };

    let entries = Object.entries(city);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

cityInfo("Sofia", " 492", "1238438", "Bulgaria", "1000");