function salaryMalus(arguments) {
    let openTabs = Number(arguments.shift());
    let salary = Number(arguments.shift());

    let tabsCounter = 0;
    let nextTab = arguments.shift();

    while (salary > 0 && tabsCounter <= openTabs) {
        if (nextTab == "Facebook") {
            salary -= 150;
        }
        if (nextTab == "Instagram") {
            salary -= 100;
        }
        if (nextTab == "Reddit") {
            salary -= 50;
        }
        nextTab = arguments.shift();
        tabsCounter++;
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else if (salary > 0) {
        console.log(`${Math.trunc(salary)}`);
    }
}

salaryMalus([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
salaryMalus([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"])
salaryMalus([3, 500.50, "Facebook", "Stackoverflow.com", "softuni.bg]"]);
