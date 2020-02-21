function salaryMalus(arguments) {
    let openTabs = Number(arguments.shift());
    let salary = Number(arguments.shift());

    let counter = 0;
    let tab = arguments.shift();

    while (salary > 0 && counter <= openTabs) {
        switch (tab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }

        counter++;
        tab = arguments.shift();
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(`${Math.trunc(salary)}`);
    }
}

salaryMalus([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])