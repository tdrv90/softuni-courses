function graduation2(arguments) {
    let name = arguments.shift();

    let counter = 1;
    let sum = 0;

    let excluded = 0;
    let isExcluded = false;

    while (counter <= 12) {
        let grade = Number(arguments.shift());

        if (grade < 4) {
            excluded++;
        }
        if (grade >= 4) {
            sum += grade;
            counter++;
        }

        if (excluded >= 2) {
            isExcluded = true;
            break;
        }
    }

    if (isExcluded == false) {
        let average = sum / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${counter} grade`);
    }
}

// graduation2(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3]);
graduation2(["Gosho",
    5,
    5.5,
    6,
    5.43,
    5.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5
    ]);