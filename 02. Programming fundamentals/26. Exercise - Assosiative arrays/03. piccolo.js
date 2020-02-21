function piccolo(input) {
    let parking = [];

    for (let inOutCarNumber of input) {
        inOutCarNumber = inOutCarNumber.split(', ');

        let move = inOutCarNumber[0];
        let car = inOutCarNumber[1];

        if (move === 'IN') {
            if (!parking.includes(car)) {
                parking.push(car);
            }
        } else if (move === 'OUT') {
            let index = parking.indexOf(car);
            if (index != -1) {
                parking.splice(index, 1);
            }
        }
    }

    let sortedParking = parking.sort((a, b) => a.localeCompare(b));

    if (sortedParking.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        sortedParking.forEach(x => console.log(x));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
console.log();
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);