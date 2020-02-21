function examPreparation(arguments) {
    let maxBadGrades = Number(arguments.shift());

    let counterGrades = 0;
    let counterBadGrades = 0;
    let sumGrades = 0;
    let lastProblem = "";

    while (counterBadGrades < maxBadGrades) {

        let nameOfExercise = arguments.shift();
        let grade = Number(arguments.shift());
        
        if (nameOfExercise == "Enough") {
            let average = sumGrades / counterGrades;
            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${counterGrades}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        
        counterGrades++;
        sumGrades += grade;
        
        if (grade <= 4) {
            counterBadGrades++;
        }

        lastProblem = nameOfExercise;
    }

    if (counterBadGrades == maxBadGrades) {
        console.log(`You need a break, ${counterBadGrades} poor grades.`);
    }
}

// examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);