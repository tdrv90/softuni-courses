function everest(arguments) {
    let reachedHeight = 5364;
    let daysCounter = 1;

    let command = arguments.shift();
    let height = 0;

    while (reachedHeight < 8848) {
        if (command == "END") {
            break;
        } else if (command == "Yes") {
            daysCounter++;
        }

        if (daysCounter > 5) {
            break;
        }
        height = Number(arguments.shift());
        reachedHeight += height;

        if (reachedHeight >= 8848) {
            break;
        }
        command = arguments.shift();
    }

    if (reachedHeight >= 8848) {
        console.log(`Goal reached for ${daysCounter} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${reachedHeight}`);
    }
}


// everest(["Yes", 1254, "Yes", 1402, "No", 250, "Yes", 635]);
// everest(["Yes", 1000, "Yes", 945, "No", 1200, "END"]);
everest(["Yes", 535, "Yes", 849, "Yes", 499, "Yes", 400, "Yes", 500]);