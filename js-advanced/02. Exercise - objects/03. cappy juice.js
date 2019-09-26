function cappyJuice(input) {
    let juices = {};
    let bottles = {};

    input.forEach((line) => {
        let [name, qty] = line.split(" => ");
        qty = Number(qty);

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }

        juices[name] += qty;
        let currentQty = juices[name];

        if (currentQty >= 1000) {
            bottles[name] = Math.trunc(currentQty / 1000);
        }
    });

    let keys = Object.keys(bottles);

    for (let juiceName of keys) {
        let quantity = bottles[juiceName];
        console.log(`${juiceName} => ${quantity}`);
    }
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);