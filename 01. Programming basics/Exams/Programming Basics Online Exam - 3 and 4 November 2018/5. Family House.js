function familyHouse(arguments) {
    let months = Number(arguments.shift());

    let electricity = 0;
    let water = 0;
    let internet = 0;
    let others = 0;
    let total = 0;

    for (let i = 0; i < months; i++) {
        let el = Number(arguments.shift());
        electricity += el;
        water += 20;
        internet += 15;
        others += (el + 20 + 15) * 1.20;
    }
    total += (electricity + water + internet + others);

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${(total / months).toFixed(2)} lv`);
}

// familyHouse([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
familyHouse([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2])