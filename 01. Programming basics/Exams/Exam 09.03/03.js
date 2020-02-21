function gymnastics(arguments) {
    let country = arguments.shift();
    let equipment = arguments.shift();

    let score = 0;

    switch (country) {
        case "Russia":
            if (equipment == "ribbon") {
                score = 9.10 + 9.40;
            } else if (equipment == "hoop") {
                score = 9.30 + 9.80;
            } else if (equipment == "rope") {
                score = 9.60 + 9;
            }
            break;
        case "Bulgaria":
            if (equipment == "ribbon") {
                score = 9.60 + 9.40;;
            } else if (equipment == "hoop") {
                score = 9.55 + 9.75;
            } else if (equipment == "rope") {
                score = 9.50 + 9.40;
            }
            break;
        case "Italy":
            if (equipment == "ribbon") {
                score = 9.20 + 9.50;
            } else if (equipment == "hoop") {
                score = 9.45 + 9.35;
            } else if (equipment == "rope") {
                score = 9.70 + 9.15;
            }
            break;
    }
    let percentage = (20 - score) / 20 * 100;
    console.log(`The team of ${country} get ${score.toFixed(3)} on ${equipment}.`);
    console.log(`${percentage.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);