function cinema(arguments) {
    let type = arguments.shift();
    let rows = Number(arguments.shift());
    let columns = Number(arguments.shift());

    let income = 0;

    switch (type) {
        case "Premiere":
            income = 12 * rows * columns;
            break;
        case "Normal":
            income = 7.50 * rows * columns;
            break;
        case "Discount":
            income = 5 * rows * columns;
            break;
    }

    console.log(`${income.toFixed(2)} leva`);
}


cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);