function seizeTheFire(input) {
    let fires = input[0].split('#');
    let water = Number(input[1]);

    let validCells = [];
    let totalEffort = 0;
    let totalFire = 0;

    fires.forEach((fireLine) => {
        let [typeOfFire, cellValue] = fireLine.split(' = ');
        cellValue = Number(cellValue);
        let isValid = isFireValid(typeOfFire, cellValue);

        if (isValid && water >= cellValue) {
            water -= cellValue;
            totalEffort += cellValue * 0.25;
            totalFire += cellValue;
            validCells.push(cellValue);
        }
    });

    function isFireValid(type, value) {
        if (type === 'High' && value >= 81 && value <= 125) {
            return true;
        }
        if (type === 'Medium' && value >= 51 && value <= 80) {
            return true;
        }
        if (type === 'Low' && value >= 1 && value <= 50) {
            return true;
        }

        return false;
    }

    // option to print on lines with forEach
    console.log(`Cells:`);
    validCells.forEach((cell) => {
        console.log(` - ${cell}`);
    });
    console.log(`Effort: ${totalEffort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

    // option to print on lines with map
    // if (validCells.length > 0) {
    // let outputCells = validCells.map((cell) => ` - ${cell}`)
    // .join('\n');
    // console.log(outputCells);
    // }
}

seizeTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);
console.log();
seizeTheFire(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', '220']);