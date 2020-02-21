function storeCatalogue(input) {
    let catalogue = {};

    for (let line of input) {
        let [name, price] = line.split(" : ");
        price = +price;

        let initial = name[0];

        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};
        }

        let products = catalogue[initial];

        if (!products.hasOwnProperty(name)) {
            products[name] = price;
        }
    }

    let sortedInitials = Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b));

    for (let initial of sortedInitials) {
        let products = catalogue[initial];
        let sortedProducts = Object.keys(products)
            .sort((a, b) => a.localeCompare(b));

        console.log(initial);
        for (let p of sortedProducts) {
            console.log(` ${p}: ${products[p]}`);
        }
    }
}

storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);
// A
// Anti-Bug Spray: 15
// Apple: 1.25
// Appricot: 20.4
// B
// Boiler: 300
// D
// Deodorant: 10
// F
// Fridge: 1500
// T
// T-Shirt: 10
// TV: 1499