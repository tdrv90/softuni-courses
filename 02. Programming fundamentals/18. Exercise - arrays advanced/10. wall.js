function buildingAwall(sections) {
    sections = sections.map(Number);
    let days = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let totalConcrete = 0;
    for (let i = 0; i < sections.length; i++) {
        let eachSection = sections[i];
        let day = 1;

        while (eachSection < 30) {
            let timesWorkedCurrentDay = +days[day - 1];
            timesWorkedCurrentDay++;
            days.splice(day - 1, 1, timesWorkedCurrentDay);
            eachSection++;
            day++;
        }
    }

    let concretePerDay = days.map(x => x * 195);
    concretePerDay = concretePerDay.filter(currentDay => currentDay != 0);

    for (let j = 0; j < concretePerDay.length; j++) {
        totalConcrete += Number(concretePerDay[j]) * 1900;
    }

    console.log(concretePerDay.join(', '));
    console.log(`${totalConcrete} pesos`);
}

buildingAwall([21, 25, 28]);


function buildAWall(arr) {
    arr = arr.map(x => Number(x));
    let totalCost = 0;
    let dailyConcreteUsage = [];
    arr = arr.filter(x => x < 30)

    while (arr.length) {
        let dailyUsage = 0;
        arr.forEach(x => dailyUsage += 195);
        arr = arr.map(x => x += 1).filter(x => x != 30);
        dailyConcreteUsage.push(dailyUsage);
        totalCost += dailyUsage * 1900;
    }

    console.log(dailyConcreteUsage.join(", "));
    console.log(`${totalCost} pesos`);
}
buildAWall([21, 25, 28]);