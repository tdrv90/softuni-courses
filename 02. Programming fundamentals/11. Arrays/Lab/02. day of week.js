function dayOfweek (day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        return days[day - 1];
    } else {
        return `Invalid day!`;
    }
}

console.log(dayOfweek(1));
console.log(dayOfweek(2));
console.log(dayOfweek(3));
console.log(dayOfweek(4));
console.log(dayOfweek(5));
console.log(dayOfweek(6));
console.log(dayOfweek(7));
console.log(dayOfweek(8));