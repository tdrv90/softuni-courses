function scholarshipsCalculator(arguments) {
    let salary = Number(arguments.shift());
    let grade = Number(arguments.shift());
    let minSalary = Number(arguments.shift());

    if (grade < 4.50) {
        console.log(`You cannot get a scholarship!`)
    } else if (grade > 4.50 && grade < 5.50) {
        if (salary < minSalary) {
            let socialScholarship = Math.floor(minSalary * 0.35);
            console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        } else {
            console.log(`You cannot get a scholarship!`);
        }
    } else if (grade >= 5.50) {
        if (salary < minSalary) {
            let socialScholarship = Math.floor(minSalary * 0.35);
            let excellenceScholarship = Math.floor(grade * 25);
            if (socialScholarship > excellenceScholarship) {
                console.log(`You get a Social scholarship ${socialScholarship} BGN`);
            } else {
                console.log(`You get a scholarship for excellent results ${excellenceScholarship} BGN`);
            }
        } else {
            let excellenceScholarship = Math.floor(grade * 25);
            console.log(`You get a scholarship for excellent results ${excellenceScholarship} BGN`)
        }
    }
}