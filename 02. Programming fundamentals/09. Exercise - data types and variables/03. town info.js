function townInfo (townName, populationCount, area) {
    let output = `Town ${townName} has population of ${populationCount} and area ${area} square km.`
    return output;
}

console.log(townInfo('Sofia', 1286383, 492));