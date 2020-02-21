function bonusScore (arguments) {
    let nr = Number(arguments.shift());
    let bonus = 0;

    if (nr <= 100) {
        bonus = 5;
    } else if (nr <=1000) {
        bonus = nr * 0.20;
    } else {
        bonus = nr * 0.10;
    }

    if (nr % 2 == 0) {
        bonus += 1;
    } else if (nr % 10 == 5) {
        bonus += 2;
    }

    let totalScore = nr + bonus;
    console.log(bonus);
    console.log(totalScore);
}

bonusScore([20]);
bonusScore([175]);
bonusScore([2703]);