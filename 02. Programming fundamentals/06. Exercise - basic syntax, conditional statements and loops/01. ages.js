function ages(number) {
    let type = "";

    if (number >= 0 && number <= 2) {
        type = "baby";
    }
    else if (number <= 13) {
        type = "child";
    } else if (number <= 19) {
        type = "teenager";
    } else if (number <= 65) {
        type = "adult";
    } else if (number >= 66) {
        type = "elder";
    }

    console.log(type);
}

ages(20);
ages(1);
ages(100);