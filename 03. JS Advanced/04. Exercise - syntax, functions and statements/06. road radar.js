function roadRadar(input) {
    let [currentSpeed, area] = input;
    let result;
    const limitMap = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let areaSpeedLimit = limitMap[area];
    let diff = currentSpeed - areaSpeedLimit;
    
    if (diff > 40) {
        result = "reckless driving";
    } else if (diff > 20) {
        result = "excessive speeding";
    } else if (diff > 0) {
        result = "speeding";
    }

    return result || '';
}

console.log(roadRadar([40, 'city']));
console.log(roadRadar([21, 'residential']));
console.log(roadRadar([120, 'interstate']));
console.log(roadRadar([200, 'motorway']));