function trainTheTrainers(arguments) {
    let jury = Number(arguments.shift());

    let line = arguments.shift();
    let totalSum = 0;
    let countGrades = 0;
    let countGrades2 = 0;

    while (line != "Finish") {
        let sumGrades = 0;
        for (let i = 0; i < jury; i++) {
            let grade = Number(arguments.shift());
            sumGrades += grade;
            countGrades++;
            countGrades2++;
        }
        let avg = sumGrades / countGrades;
        countGrades = 0;
        totalSum += sumGrades;
        console.log(`${line} - ${avg.toFixed(2)}.`);
        line = arguments.shift();
    }

    console.log(`Student's final assessment is ${(totalSum / countGrades2).toFixed(2)}.`)
}

trainTheTrainers([2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);
trainTheTrainers([3, "Arrays", 4.53, 5.23, 5.00, "Lists", 5.83, 6.00, 5.42, "Finish"]);