function invertory(input) {
    let heroes = [];

    input.forEach((line) => {
        let [heroName, level, items] = line.split(' / ');
        items = items.split(', ');
        items.sort((a, b) => a.localeCompare(b));

        let hero = {
            name: heroName,
            level: Number(level),
            items: items
        };

        heroes.push(hero);
    })

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

invertory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);

