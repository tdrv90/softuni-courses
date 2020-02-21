function scholarshipCalculator(arguments) {
    //input
    let salary = Number(arguments.shift());
    let grade = Number(arguments.shift());
    let minimumSalary = Number(arguments.shift());

    // magic
    if (grade <= 4.50) {
        console.log(`You cannot get a scholarship!`);
    } else if (grade > 4.50 && grade < 5.5) {
        if (salary > minimumSalary) {
            console.log(`You cannot get a scholarship!`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(minimumSalary * 0.35)} BGN`);
        }
    } else if (grade >= 5.50) {
        if (salary < minimumSalary) {
            let excellentScholarship = Math.floor(grade * 25);
            let socialScholarship = Math.floor(minimumSalary * 0.35);

            if (excellentScholarship > socialScholarship) {
                console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
            } else if (socialScholarship > excellentScholarship) {
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
            }
        } else {
            console.log(`You get a scholarship for excellent results ${Math.floor(grade * 25)} BGN`);
        }
    }
}

scholarshipCalculator([300, 5.65, 420]);
scholarshipCalculator([480, 4.60, 450]);