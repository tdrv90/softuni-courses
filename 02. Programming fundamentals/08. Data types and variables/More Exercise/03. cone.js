function cone(radius, height) {
    let coneVolume = (1 / 3 * Math.PI * (radius * radius) * height).toFixed(4);
    let coneTotalArea = (Math.PI * radius * (radius + Math.sqrt(height ** 2 + radius ** 2))).toFixed(4);
    console.log(`volume = ${coneVolume}`);
    console.log(`area = ${coneTotalArea}`);
}

cone(3, 5);