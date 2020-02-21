function huntingGames(input) {
    let days = Number(input.shift());
    let playersCount = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerDayPerPerson = Number(input.shift());
    let foodPerDayPerPerson = Number(input.shift());

    let water = days * playersCount * waterPerDayPerPerson;
    let food = days * playersCount * foodPerDayPerPerson;

    let consumedEnergy = input.map(Number);

    for (let day = 1; day <= days; day++) {
        let energy = consumedEnergy.shift();
        groupEnergy -= energy;

        if (groupEnergy <= 0) {
            break;
        }

        if (day % 2 === 0) {
            groupEnergy *= 1.05;
            water *= 0.70;
        }

        if (day % 3 === 0) {
            groupEnergy *= 1.10;
            food -= food / playersCount;
        }
    }

    if (groupEnergy <= 0) {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
    } else {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }
}

huntingGames(['10',
    '7',
    '5035.5',
    '11.3',
    '7.2',
    '942.3',
    '500.57',
    '520.68',
    '540.87',
    '505.99',
    '630.3',
    '784.20',
    '321.21',
    '456.8',
    '330',
    '']
);

huntingGames(['12',
    '6',
    '4430',
    '9.8',
    '5.5',
    '620.3',
    '840.2',
    '960.1',
    '220',
    '340',
    '674',
    '365',
    '345.5',
    '212',
    '412.12',
    '258',
    '496',
    '']
);