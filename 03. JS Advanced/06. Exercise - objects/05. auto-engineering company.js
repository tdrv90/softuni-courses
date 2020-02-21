function autoEngineeringCompany(input) {
    let manifacturers = {};

    input.forEach(line => {
        let [brand, model, qty] = line.split(' | ');
        qty = +qty;

        if (!manifacturers.hasOwnProperty(brand)) {
            manifacturers[brand] = {};
        }
        if (!manifacturers[brand].hasOwnProperty(model)) {
            manifacturers[brand][model] = qty;
        } else {
            manifacturers[brand][model] += qty;
        }
    });

    let final = Object.keys(manifacturers);

    for (let brand of final) {
        let models = manifacturers[brand];
        console.log(brand);
        let quantityOfEach = Object.keys(models);

        for (const qty of quantityOfEach) {
            console.log(`###${qty} -> ${models[qty]}`)
        }
        
    }
}

autoEngineeringCompany(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
);