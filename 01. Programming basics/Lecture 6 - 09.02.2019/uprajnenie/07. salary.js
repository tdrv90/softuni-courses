function salaryMalus(arguments) {
    let openTabs = Number(arguments[0]);
    let salary = Number(arguments[1]);
    
    // НАПИШИ Я С WHILE ЦИКЪЛ!
    // НАПИШИ Я С WHILE ЦИКЪЛ!
    // НАПИШИ Я С WHILE ЦИКЪЛ!

    for (let i = 1; i <= openTabs; i++) {
        let tab = arguments[i];
        
        switch(tab) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
        
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if (salary > 0) {
        console.log(`${Math.trunc(salary)}`);
    }
}

salaryMalus([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
salaryMalus([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"])
salaryMalus([3, 500.50, "Facebook", "Stackoverflow.com", "softuni.bg]"]);
