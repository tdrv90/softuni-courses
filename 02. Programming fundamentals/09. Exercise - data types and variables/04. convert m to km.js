function convertMetersToKilometers (meters) {
    let kilometers = (meters / 1000).toFixed(2);

    return kilometers;
}

console.log(convertMetersToKilometers(1852));