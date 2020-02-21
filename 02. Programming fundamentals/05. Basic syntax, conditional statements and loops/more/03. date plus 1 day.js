function nextDay(year, month, day) {

    if (year < 1901) {
        year = 1901;
    }
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(day);

    date.setDate(date.getDate() + 1);

    let year2 = date.getFullYear();
    let month2 = date.getMonth();
    let day2 = date.getDate();

    console.log(`${year2}-${month2 + 1}-${day2}`)
}

// nextDay(2016, 9, 30);
// nextDay(2016, 2, 28);
nextDay(1, 1, 1);