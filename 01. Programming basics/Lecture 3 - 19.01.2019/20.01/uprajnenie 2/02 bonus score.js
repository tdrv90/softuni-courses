function bonusScore (arguments) {
    let num = Number(arguments.shift());
    let bonus = 0;

    if (num <= 100) {
        bonus = 5;
    } else if (num <= 1000) {
        bonus = num * 0.20;
    } else {
        bonus = num * 0.10;
    }

    if (num % 2 == 0) {
        bonus += 1;
    } else if (num % 10 == 5) {
        bonus += 2;
    }

    let final = num + bonus;
    console.log(bonus);
    console.log(final);

}

bonusScore([15875]);